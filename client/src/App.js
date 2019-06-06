import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Lists from './Lists';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={require('./grocery-icon.png')} alt="grocery-icon" />
        <Users />
        <Lists />
      </header>
    </div>
  );
}

export default App;
