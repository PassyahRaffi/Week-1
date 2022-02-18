import React, { useContext } from 'react'
import { RegisteredContext, LoginContext } from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext'

export default function LoginModal() {

  const [ login, setLogin ] = useContext(LoginContext)
  const [ open, setOpen ] = useContext(ModalContext)
  const [registered, setRegistered] = useContext(RegisteredContext)

  return (
    <>
        <h4 className='text-3xl pt-10  font-bold font-["Avenir-Black"] text-red-700'>
            Login
        </h4>
        <div>
          <input type="text"
            name="InputEmail"
            placeholder='Email'
            className='w-full p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' />
        </div>
        <div>
          <input type="password"
            name="InputPassword"
            placeholder='Password'
            className='w-full p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' />
        </div>
        <div>  
          <button type="button"
            className="w-full flex item-center justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 "
            onClick={() => {
              setLogin(true)
              setOpen(false)
            }} >
          Login
          </button>
        </div>
        <p className='pb-10 text-center font-["Avenir-Book"]'>Don't have an account ? Klik  
        <button className='ml-1 font-bold font-["Avenir-Black"]' type='button' onClick={() => setRegistered(!registered)}>Here</button></p>
    </>
  )
}

