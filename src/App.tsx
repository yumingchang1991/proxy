import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import Features from './components/Features'
import InputSymbol from './components/InputSymbol'
import SendButton from './components/SendButton'
import DataTable from './components/DataTable'

function App() {
  const [etfData, setEtfData] = useState<any[any]>([])

  return (
    <div className="App">
      <main className="App-header">
        <h2>Please enter a valid ETF Symbol</h2>
        <form id="aws-form">
          <InputSymbol />
          <SendButton eventHandler={
            function submitSymbolToHeroku() {
              const targetInput: HTMLInputElement | null = document.querySelector('#aws-form input')
              const BASE_URL = "https://etf-tracker.link/"
              const apiEndPoint = new URL(BASE_URL)
              
              if (targetInput) {
                const symbol = targetInput.value
                apiEndPoint.pathname = `/api/${symbol}/eod`
                
                axios
                  .get(apiEndPoint.href)
                  .then((apiRes: any) => {
                    const { symbol, date, close, dividend } = apiRes.data
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
                  })
              }
            }
          } />
        </form>
        <DataTable etfArray={etfData} />
      </main>
      <Features />
    </div>
  )
}

export default App
