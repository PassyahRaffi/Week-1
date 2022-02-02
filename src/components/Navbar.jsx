import React from "react";

function Navbar() {
    return (
        <nav className="flex justify-between item-center mx-20 my-4">

            <div>
                <img src="/img/logo.png" alt="logo" />
            </div>

            <div className="space-x-4">
                <button className="bg-white border-2 border-red-600 text-red-600 font-bold px-5 py-2">Login</button>
                <button className="bg-red-600 border-2 border-red-600 text-white px-5 py-2 rounded-md">Register</button>
            </div>

        </nav>
    )
}

export default Navbar