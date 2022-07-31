import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div>
            <label htmlFor="stock-code">Stock Code</label>
            <input id="stock-code" type='text' name='stockCode'></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
