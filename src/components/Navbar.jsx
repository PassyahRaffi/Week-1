import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import Transactions from './Transactions'


export default function Navbar(props){


    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)

    const cancelButtonRef = useRef(null)

    return(
        <>
            <nav className='flex justify-between items-center mx-20 my-5'>
                <div>
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className='space-x-4'>
                    {props.isLogin ? (
                    <div className='flex items-center relative'>
                        <Link to="/cart" className='relative' >
                            <img className='mx-8 w-8 cursor-pointer' src="img/cart.png" alt="logo" />
                            {Transactions.length > 0 ? (
                                <div className='w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute right-6 -top-1 flex justify-center items-center'>
                                    {Transactions.length}
                                </div>
                            ) : null}
                        </Link>
                        {!props.isAdmin ? (
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
                                        <Menu.Item>
                                            <div className='flex my-3'>
                                                <img className='w-8 h-8 mx-3 mt-1' src="img/profile.png" alt="" />
                                                <a 
                                                    href=''
                                                    className='bg-white block px-4 py-2 text-md font-["Avenir-Black"] text-gray-700'>
                                                    Profile
                                                </a>
                                            </div>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <div className='flex'>
                                                <img className='w-8 h-8 mx-3 mt-1' src="img/logout.png" alt="" />
                                                <a
                                                    href=''
                                                    className='bg-white block px-4 py-2 font-["Avenir-Black"] text-md text-gray-700'>
                                                    Logout
                                                </a>
                                            </div>
                                        </Menu.Item>

                                    </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        ):(<div>
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
                                    <Menu.Item>
                                        <div className='flex my-3'>
                                            <img className='w-8 h-8 mx-3 mt-1' src="img/addproduct.png" alt="" />
                                            <a 
                                                href=''
                                                className='bg-white block px-4 py-2 text-md font-["Avenir-Black"] text-gray-700'>
                                                Add Product
                                            </a>
                                        </div>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <div className='flex mt-3 my-2'>
                                            <img className='w-8 h-8 mx-3 mt-1' src="img/addtopping.png" alt="" />
                                            <a
                                                href=''
                                                className='bg-white block px-4 py-2 font-["Avenir-Black"] text-md text-gray-700'>
                                                Add Topping
                                            </a>
                                        </div>
                                    </Menu.Item>
                                    <hr />
                                    <Menu.Item>
                                        <div className='flex mt-3 my-2'>
                                            <img className='w-8 h-8 mx-3 mt-1' src="img/logout.png" alt="" />
                                            <a
                                                href=''
                                                className='bg-white block px-4 py-2 font-["Avenir-Black"] text-md text-gray-700'>
                                                Logout
                                            </a>
                                        </div>
                                    </Menu.Item>

                                </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>)}
                        
                    </div>
                    ) : (
                    <>
                        <button onClick={() => setOpenLogin(!openLogin)} className='bg-white border-2 border-red-600 text-red-600 font-bold px-5 py-2 rounded-md'>Sign in</button>
                        <button onClick={() => setOpenRegister(!openRegister)} className='bg-red-600 border-2 border-red-600 text-white px-5 py-2 rounded-md'>Sign up</button>
                    </>
                    )}
                </div>

            </nav>

            <Transition.Root show={openLogin} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenLogin}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <h4 className='text-3xl mx-16 pt-10  font-bold font-["Avenir-Black"] text-red-700'>
                                Login
                            </h4>
                            <form action="/" method='get' className='space-y-8 my-6 font-["Avenir-Book"] text-center'>
                                <input type="text"
                                name="InputEmail"
                                placeholder='Email'
                                className='w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                                />
                                <input type="password"
                                name="InputPassword"
                                placeholder='Password'
                                className='w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                                />
                            </form>
                            <div className="mx-16 pb-5">  
                                <button
                                type="button"
                                className="w-full flex item-center justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 "
                                onClick={() => setOpenLogin(false)}
                                >
                                Login
                                </button>
                            </div>
                            <p className='pb-10 text-center font-["Avenir-Book"]'>Don't have an account ? Klik <a href='' className='font-["Avenir-Black"]' >Here</a></p>
                        </div>
                    </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={openRegister} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenRegister}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <h4 className='text-3xl mx-16 pt-10  font-bold font-["Avenir-Black"] text-red-700'>
                                Register
                            </h4>
                            <form action="/" method='get' className='space-y-8 my-6 font-["Avenir-Book"] text-center'>
                                <input type="text"
                                name="InputEmail"
                                placeholder='Email'
                                className='w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                                />
                                <input type="password"
                                name="InputPassword"
                                placeholder='Password'
                                className='w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                                />
                                <input type="text"
                                name="InputName"
                                placeholder='Full Name'
                                className='w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                                />
                            </form>
                            <div className="mx-16 pb-5">  
                                <button
                                type="button"
                                className="w-full flex item-center justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 "
                                onClick={() => setOpenRegister(false)}
                                >
                                Register
                                </button>
                            </div>
                            <p className='pb-10 text-center font-["Avenir-Book"]'>Already have an account ? Klik <a href='' className='font-["Avenir-Black"]' >Here</a></p>
                        </div>
                    </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        
        </>
    )
}