import React from "react";
import Transactions from "./Transactions";

export default function Cart() {
  return (
    <div className="mx-44 my-10">
      <div>
        <h1 className='text-red-700 font-["Avenir-Black"] text-2xl pb-7'>
          My Cart
        </h1>
      </div>
      <div className="flex">
        <div className="w-3/5">
          <h1 className='text-red-600 font-["Avenir-Black"] pb-3'>
            Review Your Order
          </h1>
          <hr className="pb-3 border-1 border-red-500" />
          <div className="block">
            {Transactions.map((item) => (
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    className="h-24 my-2 pb-3"
                    src="/img/drink1.png"
                    alt=""
                  />
                  <div className="ml-3 my-2">
                    <p className='text-red-600 font-["Avenir-Black"] '>
                      {item.productName}
                    </p>
                    <p className='text-red-400 font-["Avenir-Black"]'>
                      Topping: {item.topping}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="pb-5 text-red-600 my-2">Rp. {item.price}</p>
                  <img className="cursor-pointer" src="/img/dumb.png" alt="" />
                </div>
              </div>
            ))}
            <hr className="border-1 border-red-500" />
            <div className="flex">
              <div className="w-2/4">
                <hr className="pb-4" />
                <div className="flex justify-between pb-4">
                  <p className='text-red-600 font-["Avenir-Blook"] text-md'>
                    Sub Total:{" "}
                  </p>
                  <p className="text-red-600 text-md">
                    Rp.{" "}
                    {Transactions.map((item) => item.price).reduce(
                      (prev, next) => prev + next
                    )}
                  </p>
                </div>
                <div className="flex justify-between pb-4">
                  <p className='text-red-600 font-["Avenir-Book"] text-md'>
                    Quantity
                  </p>
                  <p className="text-red-600 text-md">{Transactions.length}</p>
                </div>
                <hr className="pb-4 border-1 border-red-500" />
                <div className="flex justify-between pb-4">
                  <p className='text-red-800 font-["Avenir-Black"] text-md'>
                    Total:{" "}
                  </p>
                  <p className='text-red-800 font-["Avenir-Black"] text-md'>
                    Rp.{" "}
                    {Transactions.map((item) => item.price).reduce(
                      (prev, next) => prev + next
                    )}
                  </p>
                </div>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <form
            action="/"
            method="get"
            className='mx-9 space-y-5 my-9 font-["Avenir-Book"] text-center'
          >
            <input
              type="text"
              name="InputName"
              placeholder="Input Name"
              className="w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
            />
            <input
              type="text"
              name="InputEmail"
              placeholder="Input Email"
              className="w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
            />
            <input
              type="number"
              name="InputPhone"
              placeholder="Input Phone"
              className="w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
            />
            <input
              type="text"
              name="InputPost"
              placeholder="Input Post Code"
              className="w-72 p-2 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
            />
            <textarea
              className="p-2 w-72 outline outline-2 outline-red-600 focus:outline-red-700 rounded-sm bg-pink-50"
              name="InputAddress"
              placeholder="Input Address"
              id=""
              cols="30"
              rows="4"
            ></textarea>

            <button className="mx-9 w-9/12 py-1 rounded-md text-white text-center bg-red-600">
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
