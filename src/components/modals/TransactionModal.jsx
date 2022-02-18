import React, { Fragment, useContext, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Transactions from '../../TempDatabase/Transactions'
import { TransactionModalContext } from '../../contexts/ModalContext'

export default function TransactionModal() {

    const [ open, setOpen] = useContext(TransactionModalContext)

    const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className='flex bg-red-200 mt-8 p-4 rounded justify-between'>
                        <div className='block space-y-4'>
                            {Transactions.map((item) => (
                                <div className='flex'>
                                    <div>
                                        <img className='h-24' src="/img/drink1.png" alt="" />
                                    </div>
                                    <div className='ml-5 text-xs flex flex-col justify-between'>
                                        <p className='text-red-600 font-["Avenir-Black"] '>{item.productName}</p>
                                        <p className='pb-2 text-yellow-900'>{item.orderDate}</p>
                                        <p className='text-red-600 font-["Avenir-Black"]'>Topping: {item.topping}</p>
                                        <p className='pb-5 text-yellow-900'>Price: Rp. {item.price}</p>
                                    </div>
                                </div>             
                            ))}  
                        </div>

                        <div className='flex flex-col items-center space-y-4'>
                            <img className='h-12 w-12' src="/img/logo.png" alt="" />
                            <img className='h-18' src="/img/code.png" alt="" />
                            <p className='text-blue-400 font-["Avenir-Black"] bg-blue-100 px-7 py-1 rounded-md text-xs'>On the way</p>
                            <p className='text-yellow-900 font-["Avenir-Black"] text-xs'>Sub Total: Rp.{Transactions.map((item) => item.price).reduce(
                                (prev, next) => prev + next)}</p>
                        </div>
                    </div>
                </div>
            </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>
  )
}
