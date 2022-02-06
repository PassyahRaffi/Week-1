import React, { useState } from "react";
import Navbar from './components/Navbar'
import Jumbotron from "./components/Jumbotron";
import Menu from "./components/Menu";
import AddProduct from "./components/Admin/AddProduct"
import AddTopping from './components/Admin/AddTopping'
import Profile from "./components/Profile"
import Cart from './components/Cart'
import Table from './components/Admin/Table'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import MenuDetail from "./components/MenuDetail";


export default function App(){
    const [isLogin, setIsLogin] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={ 
                    <>
                        <Navbar
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <Jumbotron />
                        <Menu />
                    </>}></Route>

                    <Route path="/product" element={ 
                    <>
                        <Navbar 
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <MenuDetail />
                    </>}></Route>

                    <Route path="/add-product" element={
                    <>
                        <Navbar 
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <AddProduct />
                    </>}></Route>

                    <Route path="/add-topping" element={ 
                    <>
                        <Navbar 
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <AddTopping />
                    </>}></Route>

                    <Route path="/profile" element={
                    <>
                        <Navbar 
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <Profile />
                    </>}></Route>

                    <Route path="/cart" element={
                    <>
                        <Navbar 
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <Cart />
                    </>}></Route>

                    <Route path="/table-transaction" element={ 
                    <>
                        <Navbar 
                        isLogin={isLogin}
                        isAdmin={isAdmin}/>
                        <Table />
                    </>}></Route>
                </Routes>
            </Router>
        </div>
    )
}