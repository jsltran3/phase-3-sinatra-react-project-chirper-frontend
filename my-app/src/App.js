import React from 'react';
import './index.css';
import ChirperPage from './components/ChirperPage.js';
import './App.css'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Project 3: Chirper
        </p>
        <h3>
          <ChirperPage />
        </h3>
      </header>
    </div>
  );
}

export default App;
