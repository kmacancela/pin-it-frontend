import React from 'react';
// import Chat from './components/chat'
// import Dashboard from './Dashboard'
// import Store from './Store'
// import Map from './components/Map'
// import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import { useRoutes } from 'hookrouter';
import Routes from './Routes'

export default function App() {
  const routeResult = useRoutes(Routes)
  return routeResult
}
