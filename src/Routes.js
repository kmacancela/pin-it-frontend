import React from "react";
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'
import Search from './components/Search'
import Inbox from './components/Inbox'

const routes = {
  "/": () => <Welcome />,
  "/signup": () => <Signup />,
  "/login": () => <Login />,
  "/search": () => <Search />,
  "/inbox": () => <Inbox />

}
export default routes;
