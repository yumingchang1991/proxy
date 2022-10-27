import './styles/App.css'
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Features from './components/Features'
import AdminSymbols from './components/AdminSymbols'
import Login from './components/Login'
import Register from './components/Register'
import RequireAuth from './components/RequireAuth'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='proxy-frontend/login' element={<Login />} />
        <Route path='proxy-frontend/register' element={<Register />} />
        
        <Route element={<RequireAuth />}>
          <Route path='proxy-frontend/features' element={<Features />} />
          <Route path='proxy-frontend/symbols' element={<AdminSymbols />} />
          <Route path='proxy-frontend' element={<Portfolio />} />
        </Route>
        
        <Route element={<Login />} />

      </Route>
    </Routes>
  )
}

export default App
