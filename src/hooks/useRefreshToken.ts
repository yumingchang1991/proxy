import axios from '../config/axios'
import useAuth from './useAuth'

const REFRESH_ENDPOINT = '/api/auth/refresh'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

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
    console.log(axiosRes.data.message)
  }
  
  return refresh
}

export default useRefreshToken
