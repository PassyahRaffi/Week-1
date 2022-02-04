import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Menu from "./components/Menu";
import AddProduct from "./components/Admin/AddProduct";
import AddTopping from "./components/Admin/AddTopping";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import MenuDetail from "./components/MenuDetail";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<ProductDetail />}></Route>
          <Route path="/add-product" element={<AddNewProduct />}></Route>
          <Route path="/add-topping" element={<AddNewTopping />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/cart" element={<MyCart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Menu />
    </>
  );
}

function ProductDetail() {
  return (
    <>
      <Navbar />
      <MenuDetail />
    </>
  );
}

function AddNewProduct() {
  return (
    <>
      <Navbar />
      <AddProduct />
    </>
  );
}

function AddNewTopping() {
  return (
    <>
      <Navbar />
      <AddTopping />
    </>
  );
}

function ProfilePage() {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}

function MyCart() {
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
}
