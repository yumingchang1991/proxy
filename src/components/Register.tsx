import '../styles/register.css'
import { Typography, Button, TextField } from "@mui/material"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from '../config/axios'

export default function Register () {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setErrorMessage('')
  }, [account, password, confirmPassword])

  const registerUser = () => {
    if (password !== confirmPassword) {
      return setErrorMessage('make sure Password and Confirm Password the same')
    }
    const usernameElement: HTMLInputElement | null = document.querySelector('#username')
    if (usernameElement) {
      const newUser = {
        username: usernameElement.value,
        account,
        password
      }
      axios
        .post(
          '/api/users',
          JSON.stringify(newUser),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(axiosRes => {
          const apiRes = axiosRes.data
          if (apiRes.status === 'error') return setErrorMessage(apiRes.message)
          if (apiRes.status === 'success') {
            navigate('/proxy-frontend/login')
          }
        })
        .catch(e => {
          setErrorMessage(e)
        })
    }
  }

  return (
    <main className='register-section'>
      <header>
        <Typography variant='h5'>
          Join Us!
        </Typography>
        {errorMessage
          ? <Typography color='error'>{errorMessage}</Typography>
          : ''}
      </header>
      <form className="register-form">
        <TextField id="username" label="Username" variant="standard" autoComplete='off' autoFocus required />
        <TextField id="account" label="Login Account" variant="standard" autoComplete='off' required onChange={(e) => setAccount(e.target.value)} />
        <TextField id="password" label="Login Password" variant="standard" type='password' autoComplete='new-password' required onChange={(e) => setPassword(e.target.value)} />
        <TextField id="confirmPassword" label="Confirm Login Password" variant="standard" type='password' autoComplete='new-password' required onChange={(e) => setConfirmPassword(e.target.value)} />
      </form>
      <Button fullWidth={true} onClick={registerUser}>
        Join Now
      </Button>
      <Button fullWidth={true} color='error' onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </main>
  )
}
