import React from 'react';
import './App.css';
import logo from './logo.png'; // imported local image
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Grid Dynamics Logo" style={{ width: '200px' }} />
        <p>
         Welcome to Grid Dynamics
        </p>
      
      </header>
    </div>
  );
}
export default App;