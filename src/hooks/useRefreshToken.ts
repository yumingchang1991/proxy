import axios from '../config/axios'
import useAuth from './useAuth'

const REFRESH_ENDPOINT = '/api/auth/refresh'

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth()

  const refresh = async () => {
    const axiosRes = await axios.get(REFRESH_ENDPOINT, {
      withCredentials: true
    })
    if (axiosRes.data.status === 'success') {
      setAuth(prev => {
        return { ...prev, accessToken: axiosRes.data.accessToken }
      })
      return axiosRes.data.accessToken
    }
  }
  
  return refresh
}

export default useRefreshToken
