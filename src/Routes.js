import React from "react";
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'
import Search from './components/Search'

const routes = {
  "/": () => <Welcome />,
  "/signup": () => <Signup />,
"/login": () => <Login />,
  "/search": () => <Search />
}
export default routes;
