import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello World</h1>
      <h1>David</h1>
      <div>
      <React.StrictMode>
          <Calculator/>
      </React.StrictMode>
    </div>
      </header>
    </div>
  );
}

export default App;
