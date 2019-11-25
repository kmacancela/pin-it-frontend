import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Chat from './components/chat'
import Dashboard from './Dashboard'
import Store from './Store'
import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'

export default class App extends Component {

  state = {
    messages: null
  }

  componentWillMount = () => {
    fetch("http://localhost:3000/messages")
    .then(r => r.json())
    .then(messages => {
      console.log(messages)
      this.setState({
        messages
      })
    })
  }

  render() {
    console.log("messages in render", this.state.messages)
    return (
      <div className="App">
        {/*<Chat title="Chat going on here"/>*/}
        <Header />
        <Footer />
        <Search />
        { /* <Store>
          <Dashboard />
        </Store> */ }
        { /* <Map /> */ }
      </div>
    )
  }
}
