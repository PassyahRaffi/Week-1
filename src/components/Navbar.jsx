import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
import Transactions from '../TempDatabase/Transactions'
import { AdminContext, LoginContext, RegisteredContext } from '../contexts/AuthContext'
import { ModalContext } from '../contexts/ModalContext'


export default function Navbar(){

    const [ registered, setRegistered ] = useContext(RegisteredContext)
    const [open, setOpen] = useContext(ModalContext)
    const [ login, setLogin ] = useContext(LoginContext)
    const [admin, setAdmin] = useContext(AdminContext)

    return(
        <>
            <nav className='flex justify-between items-center mx-20 my-2'>
                <div>
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className='space-x-4'>
                    {login ? (
                    <div className='flex items-center relative'>
                        <Link to={admin ? "/transactions" : "/cart"} className='relative' >
                            <img className='mx-8 w-8 cursor-pointer' src="img/cart.png" alt="logo" />
                            {admin ? null : Transactions.length > 0 ? (
                                <div className='w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute right-6 -top-1 flex justify-center items-center'>
                                    {Transactions.length}
                                </div>
                            ) : null}
                        </Link>
                        <div>
                            <Menu as="div" className="ml-3 relative z-10">
                                <div>
                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-12 w-12 rounded-full" src="/img/user.png" alt="" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {!admin ? (
                                        <Menu.Item>
                                            <div className='flex my-3'>
                                                <img className='w-8 h-8 mx-3 mt-1' src="img/profile.png" alt="" />
                                                <Link 
                                                    to='/profile'
                                                    className='bg-white block px-4 py-2 text-md font-["Avenir-Roman"] text-gray-700'>
                                                    Profile
                                                </Link>
                                            </div>
                                        </Menu.Item>  
                                ):(
                                <>
                                    <Menu.Item>
                                        <div className='flex my-3'>
                                            <img className='h-8 mx-4 mt-1' src="img/addproduct.png" alt="" />
                                            <Link to="/add-product"
                                                className='bg-white block px-4 py-2 text-md font-["Avenir-Roman"] font-bold text-gray-700'>
                                                Add Product
                                            </Link>
                                        </div>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <div className='flex mt-3 my-2'>
                                            <img className='h-8 mx-3 mt-1' src="img/addtopping.png" alt="" />
                                            <Link to="/add-topping"
                                                className='bg-white block px-4 py-2 font-["Avenir-Roman"] font-bold text-md text-gray-700'>
                                                Add Topping
                                            </Link>
                                        </div>
                                    </Menu.Item>
                                </>
                                )}
                                <hr />
                                    <Menu.Item>
                                        <div onClick={() => setLogin(false)} className='flex mt-3 my-2'>
                                            <img className='h-8 mx-3 mt-1' src="img/logout.png" alt="" />
                                            <div
                                                className='bg-white block px-4 py-2 font-["Avenir-Roman"] font-bold text-md text-gray-700 cursor-pointer'>
                                                Logout
                                            </div>
                                        </div>
                                    </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div> 
                    </div>
                    ) : (
                    <>
                        <button className='bg-white border-2 border-red-600 text-red-600 font-["Avenir-Roman"] px-5 py-2 rounded-md' onClick={() => {
                            setOpen(!open)
                            setRegistered(true)
                        }}>Login</button>
                        <button className='bg-red-600 border-2 border-red-600 font-["Avenir-Roman"] text-white px-5 py-2 rounded-md' onClick={() => {
                            setOpen(!open)
                            setRegistered(false)
                        }}>Register</button>
                    </>
                    )}
                </div>
            </nav>
        </>
    )
}