import { createContext, SetStateAction, useState, Dispatch } from 'react'

interface iAuth {
  username: string,
  account: string,
  accessToken: string
}

interface iAuthContext {
  auth: iAuth,
  setAuth: Dispatch<SetStateAction<iAuth>>
}

const AuthContext = createContext({} as iAuthContext)

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({} as iAuth)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
