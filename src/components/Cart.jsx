import React, {useContext}  from 'react';
import Transactions from '../TempDatabase/Transactions';
import { CartModalContext } from "../contexts/ModalContext";
import CartModal from './modals/CartModal'


export default function Cart() {

    const [open, setOpen] = useContext(CartModalContext)

    function successPrompt() {
        setOpen(!open);
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }

  return (
      <>
        <div className='mx-44 my-10'>
            <div>
                <h1 className='text-red-700 font-["Avenir-Black"] text-2xl pb-7'>My Cart</h1>
            </div>
            <div className='flex'>
                <div className='w-3/5'>
                    <h1 className='text-red-600 font-["Avenir-Black"] pb-3'>Review Your Order</h1>
                    <hr className='pb-3 border-1 border-red-500' />
                    <div className='block'>
                        {Transactions.map((item) => (
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <img className='h-24 my-2 pb-3' src="/img/drink1.png" alt="" />
                                <div className='ml-3 my-2'>
                                    <p className='text-red-600 font-["Avenir-Black"] '>{item.productName}</p>
                                    <p className='text-red-400 font-["Avenir-Black"]'>Topping: {item.topping}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-end'>
                                <p className='pb-5 text-red-600 my-2'>Rp. {item.price}</p>
                                <img className='cursor-pointer' src="/img/dumb.png" alt="" />
                            </div>
                        </div>
                        ))}
                        <hr className='border-1 border-red-500' />
                        <div className='flex'>
                            <div className='w-2/4'>
                                <hr className='pb-4 border-1 mt-4 border-red-500' />
                                <div className='flex justify-between pb-4'>
                                    <p className='text-red-600 font-["Avenir-Blook"] text-md'>Sub Total: </p>
                                    <p className='text-red-600 text-md'>Rp. {Transactions.map((item) => item.price).reduce((prev, next) => prev + next)}</p>
                                </div>
                                <div className='flex justify-between pb-4'>
                                    <p className='text-red-600 font-["Avenir-Book"] text-md'>Quantity</p>
                                    <p className='text-red-600 text-md'>{Transactions.length}</p>
                                </div>
                                <hr className='pb-4 border-1 border-red-500' />
                                <div className='flex justify-between pb-4'>
                                    <p className='text-red-800 font-["Avenir-Black"] text-md'>Total: </p>
                                    <p className='text-red-800 font-["Avenir-Black"] text-md'>Rp. {Transactions.map((item) => item.price).reduce((prev, next) => prev + next)}</p>
                                </div>
                            </div>
                            <div className='mx-14 mt-2 w-1/3 justify-end'>     
                                <div className="mt-1 w-60 flex justify-between px-6 pt-5 pb-6 border-2 bg-pink-50 border-red-500 rounded-md">
                                    <div className=" space-y-1 text-center">
                                        <img className='mx-16 h-14 w-14 mb-4' src="/img/file.png" alt="" />
                                        <div className=" text-xs">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer font-['Avenir-Book'] rounded-md font-medium text-red-800 "
                                        >
                                            <span>Attache of Transaction</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/5'>
                    <form action="/" method='get' className='mx-9 space-y-5 my-9 font-["Avenir-Book"] text-center'>
                        <input type="text"
                        name="InputName"
                        placeholder='Name'
                        className='w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                        />
                        <input type="text"
                        name="InputEmail"
                        placeholder='Email'
                        className='w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                        />
                        <input type="text"
                        name="InputPhone"
                        placeholder='Phone'
                        className='w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                        />
                        <input type="text"
                        name="InputPost"
                        placeholder='Post Code'
                        className='w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                        />
                        <textarea className='p-2 w-72 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
                        name="InputAddress" placeholder='Address' id="" cols="30" rows="4"></textarea>

                        <button onClick={() => successPrompt()} type='button' className='mx-9 w-9/12 py-1 rounded-md text-white text-center bg-red-600'>
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <CartModal />
      </>
    )              
}