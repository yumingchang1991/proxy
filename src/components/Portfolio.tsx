import '../styles/portfolio.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, LinearProgress } from '@mui/material'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import InputSymbol from '../components/InputSymbol'
import SendButton from '../components/SendButton'
import ETFDataTable from '../components/ETFDataTable'

function App() {
  const [etfData, setEtfData] = useState<any[]>([])
  const [logMessage, setLog] = useState('')
  const [displayProgress, setDisplayProgress] = useState(false)
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  const formatRequestedETF = ({ symbol, date, close, dividend }: { symbol: string, date: string, close: string, dividend: string }) => {
    const formatDate = new Date(date).toLocaleDateString()
    return {
      symbol,
      date: formatDate,
      close,
      dividend
    }
  }

  const submitSymbolToProxyServer = async () => {
    const targetInput: HTMLInputElement | null = document.querySelector('#aws-form input')
    if (!targetInput) return setLog('please refresh and try again')
  
    const symbolInput = targetInput.value
    if (!symbolInput.length) return setLog('please enter symbol before submit')

    const API_ENDPOINT = `/api/${symbolInput.trim().toUpperCase()}/eod`

    let axiosRes
    setLog('fetching data ...')
    setDisplayProgress(preState => !preState)

    try {
      axiosRes = await axiosPrivate.get(API_ENDPOINT, { withCredentials: true })
    } catch (err) {
      return navigate('/proxy-frontend/login', { state: { from: location }, replace: true })
    }
    
    // if program reaches here then there is axiosRes
    setLog('')
    setDisplayProgress(preState => !preState)
    // if it is a handled error from server, it will be a valid JSON object with status === error
    if (axiosRes.status === 401) {
      return navigate('/proxy-frontend/login', { state: { from: location }, replace: true })
    }
    if (axiosRes.data.status === 'error' ) return setLog(axiosRes.data.message)

    const requestedETF = formatRequestedETF(axiosRes.data)

    const sameETFs = etfData.filter((etf: any) => etf.symbol === requestedETF.symbol)
    if (sameETFs.length > 0) {
      const sameDateETFs = sameETFs.filter((etf: any) => etf.date === requestedETF.date)
      if (sameDateETFs.length > 0) return
    }

    setEtfData((existingData: any) => {
      return [...existingData, requestedETF]
    })
    
  }

  return (
    <main className="portfolio-section">
      <h2>ETF Tracker</h2>
      {
        displayProgress
          ? <Box width='50%'><LinearProgress /></Box>
          : ''
      }
      <form id="aws-form">
        <InputSymbol />
        {logMessage === '' ? '' : <p className='log-message'>{logMessage}</p>}
        <SendButton eventHandler={submitSymbolToProxyServer} />
      </form>
      <ETFDataTable etfArray={etfData} />
    </main>
  )
}

export default App
