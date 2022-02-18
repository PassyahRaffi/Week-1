import React, { createContext, useState } from 'react'

// Modal Context
export const ModalContext = createContext()

export const ModalProvider =  ({children}) => {
    const [ open, setOpen ] = useState(false)

    return (
        <ModalContext.Provider value={[open, setOpen]}>
            {children}
        </ModalContext.Provider>
    )
}

// Modal Transaction
export const TransactionModalContext = createContext()

export const TransactionModalProvider =  ({children}) => {
    const [ open, setOpen ] = useState(false)

    return (
        <TransactionModalContext.Provider value={[open, setOpen]}>
            {children}
        </TransactionModalContext.Provider>
    )
}

// Modal Cart
export const CartModalContext = createContext()

export const CartModalProvider =  ({children}) => {
    const [ open, setOpen ] = useState(false)

    return (
        <CartModalContext.Provider value={[open, setOpen]}>
            {children}
        </CartModalContext.Provider>
    )
}