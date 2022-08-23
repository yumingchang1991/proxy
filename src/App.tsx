import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import InputSymbol from './components/InputSymbol'
import SendButton from './components/SendButton'
import DataTable from './components/DataTable'


function App() {
  const [etfData, setEtfData] = useState<any[any]>([])

  return (
    <div className="App">
      <main className="App-header">
        <h2>This will sent to Heroku HTTPS Server</h2>
        <form id="heroku-form">
          <InputSymbol />
          <SendButton eventHandler={
            function submitSymbolToHeroku() {
              const targetInput: HTMLInputElement | null = document.querySelector('#heroku-form input')
              const BASE_URL = "https://etf-tracker.herokuapp.com/"
              const apiEndPoint = new URL(BASE_URL)
              
              if (targetInput) {
                const symbol = targetInput.value
                apiEndPoint.pathname = `/api/${symbol}/eod`
                
                axios
                  .get(apiEndPoint.href)
                  .then((apiRes: any) => {
                    const { symbol, date, close, dividend } = apiRes.data
                    const requestedETF = {
                      symbol,
                      date: new Date(date).toLocaleDateString(),
                      close,
                      dividend
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
      <main className="App-header">
        <h2>This will sent to AWS HTTP server</h2>
        <p>I haven't bought a domain to make it secure ...</p>
        <form id="aws-form">
          <InputSymbol />
          <SendButton eventHandler={
            function submitSymbolToAWS() {
              const BASE_URL = "http://trackportfolio-env-1.eba-gswabkju.ap-southeast-1.elasticbeanstalk.com/"
              const apiEndPoint = new URL(BASE_URL)
              const targetInput: HTMLInputElement | null = document.querySelector('#aws-form input')

              if (targetInput) {
                const symbol = targetInput.value
                apiEndPoint.pathname = `/api/${symbol}/eod`
                axios
                  .get(apiEndPoint.href)
                  .then((apiRes: any[any]) => {
                    apiRes.data.forEach((etf: any) => {
                      const { symbol, date, close, dividend } = etf
                      const requestedETF = {
                        symbol,
                        date: new Date(date).toLocaleDateString(),
                        close,
                        dividend
                      }
                      setEtfData((existingData: any) => {
                        return [...existingData, requestedETF]
                      })
                    })
                  })
              }
            }
          }  />
        </form>
        <DataTable etfArray={etfData} />
      </main>
    </div>
  )
}

export default App
