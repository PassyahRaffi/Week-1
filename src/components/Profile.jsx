import React from "react";
import Transactions from "./Transactions";

export default function Profile() {
  return (
    <div className="flex justify-between mx-28 my-14">
      <div className="w-1/2">
        <h1 className='text-red-600 font-["Avenir-Black"] text-2xl'>
          My Profile
        </h1>
        <div className="flex mt-8">
          <img src="/img/Avatar.png" alt="profile" />
          <div className="ml-5 space-y-1">
            <p className='text-yellow-900 font-["Avenir-Black"]'>Full Name</p>
            <p className="pb-3">Muhammad Passyah Abdul Raffi</p>
            <p className='text-yellow-900 font-["Avenir-Black"]'>Email</p>
            <p>Passyah11@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className='text-yellow-900 font-["Avenir-Black"] text-2xl'>
          My Transaction
        </h1>
        <div className="flex bg-red-200 mt-8 p-4 rounded justify-between">
          <div className="block space-y-4">
            {Transactions.map((item) => (
              <div className="flex">
                <div>
                  <img className="h-24" src="/img/drink1.png" alt="" />
                </div>
                <div className="ml-5 text-xs flex flex-col justify-between">
                  <p className='text-red-600 font-["Avenir-Black"] '>
                    {item.productName}
                  </p>
                  <p className="pb-2 text-yellow-900">{item.orderDate}</p>
                  <p className='text-red-600 font-["Avenir-Black"]'>
                    Topping: {item.topping}
                  </p>
                  <p className="pb-5 text-yellow-900">
                    Price: Rp. {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img className="h-12 w-12" src="/img/logo.png" alt="" />
            <img className="h-18" src="/img/code.png" alt="" />
            <p className='text-blue-400 font-["Avenir-Black"] bg-blue-100 px-7 py-1 rounded-md text-xs'>
              On the way
            </p>
            <p className='text-yellow-900 font-["Avenir-Black"] text-xs'>
              Sub Total: Rp.
              {Transactions.map((item) => item.price).reduce(
                (prev, next) => prev + next
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
