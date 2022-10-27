import '../styles/login.css'
import { useEffect, useState } from 'react'
import { Button, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import axios from '../config/axios'
import useAuth from '../hooks/useAuth'

export default function Login() {
  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setErrorMessage('')
  }, [account, password])

  const handleLogIn = async () => {
    const LOGIN_ENDPOINT = '/api/auth/login'

    try {
      const axiosRes = await axios.post(
        LOGIN_ENDPOINT,
        JSON.stringify({ account, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      if (axiosRes.data.status === 'success') {
        const accessToken: string = axiosRes.data.accessToken
        const username: string = axiosRes.data.username
        setAuth({ username, account, accessToken })
        setAccount('')
        setPassword('')
        navigate('/proxy-frontend', { replace: true })
      }
      if (axiosRes.data.status === 'error') {
        setErrorMessage(axiosRes.data.message)
      }
    } catch (err: any) {
      if (!err?.response) {
        setErrorMessage('No server response')
      } else if (err?.response?.status === 400) {
        setErrorMessage('Missing username or password')
      } else if (err?.response?.status === 401) {
        setErrorMessage('Unauthorized')
      } else {
        setErrorMessage('Login Fail')
      }
    }

  }

  const handleDummyCredentials = () => {
    setAccount('Ken_Allen')
    setPassword('12345678')
  }

  return (
    <main className='login-section'>
      <header>
        <Typography variant='h5'>
          User Login
        </Typography>
        {errorMessage
          ? <Typography color='error'>{errorMessage}</Typography>
          : ''}
      </header>
      <form className="login-form">
        <TextField id="account" label="Account" variant="standard" value={account} autoFocus required autoComplete='username' onChange={(e) => setAccount(e.target.value)} />
        <TextField id="password" label="Password" variant="standard" type='password' value={password} required autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
      </form>
      <Button fullWidth={true} onClick={handleLogIn}>Submit</Button>
      <footer className='login-form-footer'>
        <Link to="/proxy-frontend/register" style={{ marginInline: 'auto' }}>
          Join Membership
        </Link>
        <Button fullWidth={true} onClick={handleDummyCredentials}>use Guest Credentials</Button>
        {/* <Link to="/proxy-frontend/reset-password">Reset Password</Link> */}
      </footer>
    </main>
  )
}
