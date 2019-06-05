import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
         Home
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.bizx.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Menu
        </a>
      </header>
      <article className="App-main">
          
      </article>
      <footer className="App-footer">
        Thanks for visiting 
      </footer>
    </div>
  );
}

export default App;
