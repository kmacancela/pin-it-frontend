import React, { Component } from 'react';
import './App.css';
// import Chat from './components/chat'
// import Dashboard from './Dashboard'
// import Store from './Store'
// import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Inbox from './components/Inbox'
// import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function App() {
  return (
    <div className="App">
      {/*<Chat title="Chat going on here"/>*/}
      <Header />
      <Footer />
      <Search />
      <Inbox />
      { /* <Store>
        <Dashboard />
      </Store> */ }
      { /* <Map /> */ }
    </div>
  )
}
