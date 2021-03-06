import React, { createContext, useState } from 'react'

// Modal Login
export const LoginContext = createContext()

export const LoginProvider =  ({children}) => {
    const [ login, setLogin ] = useState(false)

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {children}
        </LoginContext.Provider>
    )
}

// Admin Context
export const AdminContext = createContext()

export const AdminProvider =  ({children}) => {
    const [ admin, setAdmin ] = useState(true)

    return (
        <AdminContext.Provider value={[admin, setAdmin]}>
            {children}
        </AdminContext.Provider>
    )
}

// Modal Register
export const RegisteredContext = createContext()

export const RegisteredProvider =  ({children}) => {
    const [ registered, setRegistered ] = useState(false)

    return (
        <RegisteredContext.Provider value={[registered, setRegistered]}>
            {children}
        </RegisteredContext.Provider>
    )
}