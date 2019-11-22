import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Chat from './components/chat'
import Dashboard from './Dashboard'
import Store from './Store'

function App() {
  return (
    <div className="App">
      {/*<Chat title="Chat going on here"/>*/}
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
