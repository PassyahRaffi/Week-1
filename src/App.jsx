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
import CustomerRoute from "./auth/CustomerRoute";

import Modal from "./components/modals";
import { AdminProvider, LoginProvider, RegisteredProvider } from "./contexts/AuthContext";
import { CartModalProvider, ModalProvider, TransactionModalProvider } from "./contexts/ModalContext";

export default function App(){
    return(
        <div>
            <LoginProvider>
                <AdminProvider>
                    <Router>
                        <ModalProvider>
                            <RegisteredProvider>
                                <Navbar />
                                <Modal />   
                            </RegisteredProvider>
                        </ModalProvider>
                        <Routes>
                            <Route path="/" element={ 
                                <>
                                    <Jumbotron />
                                    <Menu />
                                </>
                            }/>

                            <Route exact path="/" element={<CustomerRoute />} >
                                <Route path="/product" element={<MenuDetail />} />
                                <Route path="/add-product" element={<AddProduct />} />
                                <Route path="/add-topping" element={<AddTopping />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/cart" element={
                                    <CartModalProvider>
                                        <Cart />
                                    </CartModalProvider>} />
                                <Route path="/transactions" element={
                                    <TransactionModalProvider>
                                        <Table />
                                    </TransactionModalProvider>} />
                            </Route>    
                        </Routes>
                    </Router>
                </AdminProvider>
            </LoginProvider>
        </div>
    )
}