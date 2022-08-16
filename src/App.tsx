import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="http://trackportfolio-env-1.eba-gswabkju.ap-southeast-1.elasticbeanstalk.com/eod/latest" method="POST">
          <div>
            <label htmlFor="stock-code">Stock Symbol</label>
            <input id="stock-symbol" type='text' name='symbol' value='VTI'></input>
          </div>
          <button type="submit">get price</button>
        </form>
      </header>
    </div>
  );
}

export default App;
