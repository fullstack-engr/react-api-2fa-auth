import React from 'react';
import './App.css';
import Verification from './components/Verification'; // Import the Verification component

function App() {
  return (
    <div className="App">
      <h1>React API App Calling Easyspend Backend for 2FA</h1>
      <Verification />
    </div>
  );
}

export default App;
