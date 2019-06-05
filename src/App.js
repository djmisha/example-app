import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
         Demo App
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.bizx.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
      <article className="App-main">
        <div>Content</div>
      </article>
      <footer className="App-footer">
        Copyright Demo App 2019
      </footer>
    </div>
  );
}

export default App;
