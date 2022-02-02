import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

// import(BrowserRouter, Routers, Route) from "react-router-dom"

import Jumbotron from "./components/Jumbotron";
import'./App.css'

export default function App() {
  return (
    <div>
      <Router>
        <Router path="/" element={<Home />}></Router>
      </Router>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Menu />
    </div>
  )
}

export default function ProductDetail() {
  return (
    <div>
      <Navbar />
      <MenuDetail />
      <Menu />
    </div>
  )
}
