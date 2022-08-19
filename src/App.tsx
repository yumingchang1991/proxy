import React from 'react';
import './App.css';

function App() {
  const codeExample = `{
    status: "success",
    message: "Your request reached AWS server with stock symbol: [YourSymbol]"
  }`
  return (
    <div className="App">
      <main className="App-header">
        <h2>This will sent to AWS with HTTP request</h2>
        <p>HTTP request from HTTPS site is blocked by browser, so there will be warning.</p>
        <p>If HTTP request sent successfully, AWS server returns JSON object as below:</p>
        <code>{codeExample}</code>
        <form action="http://trackportfolio-env-1.eba-gswabkju.ap-southeast-1.elasticbeanstalk.com/api/eod/latest" method="POST">
          <div>
            <label htmlFor="stock-symbol">Stock Symbol</label>
            <input id="stock-symbol" type='text' name='symbol' value='VTI'></input>
          </div>
          <button type="submit">get price</button>
        </form>
      </main>
      <main className="App-header">
        <h2>This will sent to Heroku HTTPS Server</h2>
        <p>the production code is based on Heroku server becasue of HTTPS</p>
        <form action="https://etf-tracker.herokuapp.com/api/eod/latest" method="POST">
          <div>
            <label htmlFor="stock-symbol">Stock Symbol</label>
            <input id="stock-symbol" type='text' name='symbol' value='VTI'></input>
          </div>
          <button type="submit">get price</button>
        </form>
      </main>
    </div>
  );
}

export default App;
