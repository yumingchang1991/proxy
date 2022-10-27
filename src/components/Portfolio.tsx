import '../styles/portfolio.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import InputSymbol from '../components/InputSymbol'
import SendButton from '../components/SendButton'
import ETFDataTable from '../components/ETFDataTable'

function App() {
  const [etfData, setEtfData] = useState<any[]>([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <main className="portfolio-section">
      <h2>Please enter US ETF Symbol</h2>
      <form id="aws-form">
        <InputSymbol />
        <SendButton eventHandler={
          async function submitSymbolToProxyServer() {
            const targetInput: HTMLInputElement | null = document.querySelector('#aws-form input')
            if (targetInput) {
              const symbol = targetInput.value
              const API_ENDPOINT = `/api/${symbol}/eod`

              try {
                const axiosRes = await axiosPrivate.get(API_ENDPOINT, { withCredentials: true })
                const { symbol, date, close, dividend } = axiosRes.data
                const formatDate = new Date(date).toLocaleDateString()
                const requestedETF = {
                  symbol,
                  date: formatDate,
                  close,
                  dividend
                }

                const sameETFs = etfData.filter((etf: any) => etf.symbol === requestedETF.symbol)
                if (sameETFs.length > 0) {
                  const sameDateETFs = sameETFs.filter((etf: any) => etf.date === requestedETF.date)
                  if (sameDateETFs.length > 0) return
                }

                setEtfData((existingData: any) => {
                  return [...existingData, requestedETF]
                })
              } catch (err) {
                console.error(err)
                navigate('/proxy-frontend/login', { state: { from: location }, replace: true })
              }
            }
          }
        } />
      </form>
      <ETFDataTable etfArray={etfData} />
    </main>
  )
}

export default App
