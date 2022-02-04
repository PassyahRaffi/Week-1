import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <nav className="flex justify-between items-center mx-20 my-2">
        <div>
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setOpen(!open)}
            className="bg-white border-2 border-red-600 text-red-600 font-bold px-5 py-2 rounded-md"
          >
            Sign in
          </button>
          <button className="bg-red-600 border-2 border-red-600 text-white px-5 py-2 rounded-md">
            Sign up
          </button>
        </div>
      </nav>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
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
                <form
                  action="/"
                  method="get"
                  className='space-y-8 my-6 font-["Avenir-Book"] text-center'
                >
                  <input
                    type="text"
                    name="InputEmail"
                    placeholder="Email"
                    className="w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
                  />
                  <input
                    type="password"
                    name="InputPassword"
                    placeholder="Password"
                    className="w-96 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
                  />
                </form>
                <div className="mx-16 pb-5">
                  <button
                    type="button"
                    className="w-full flex item-center justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 "
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </button>
                </div>
                <p className='pb-10 text-center font-["Avenir-Book"]'>
                  Don't have an account ? Klik{" "}
                  <a href="" className='font-["Avenir-Black"]'>
                    Here
                  </a>
                </p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
