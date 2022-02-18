import React, { useContext } from 'react'
import { RegisteredContext } from '../../contexts/AuthContext'

export default function RegisterModal() {

  const [registered, setRegistered] = useContext(RegisteredContext)

  return (
    <>
        <h4 className='text-3xl pt-10 font-bold font-["Avenir-Black"] text-red-700'>
            Register
        </h4>
        <div>
          <input type="text"
            name="InputName"
            placeholder='Full Name'
            className='w-full p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
          />
        </div>
        <div>
          <input type="text"
            name="InputEmail"
            placeholder='Email'
            className='w-full p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
          />
        </div>
        <div>
          <input type="Password"
            name="InputPassword"
            placeholder='Password'
            className='w-full p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50' 
          />
        </div>
        <div>  
            <button
            type="button"
            className="w-full flex item-center justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800">
            Register
            </button>
        </div>
        <p className='pb-10 text-center font-["Avenir-Book"]'>Already have an account ? Klik
        <button className='ml-1 font-bold font-["Avenir-Black"]' type='button' onClick={() => setRegistered(!registered)}>Here</button></p>
    </>
  )
}



