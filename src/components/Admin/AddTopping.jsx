import React from "react";

export default function AddTopping() {
  return (
    <div className="flex justify-between mx-28 my-10">
      <div className="w-7/12">
        <h4 className='text-5xl font-bold font-["Avenir-Black"] text-red-600'>
          Topping
        </h4>
        <form
          action="/"
          method="get"
          className='space-y-8 my-10 font-["Avenir-Book"] text-center'
        >
          <input
            type="text"
            name="AddToppingName"
            placeholder="Name Topping"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="text"
            name="AddToppingtPrice"
            placeholder="Topping"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <input
            type="text"
            name="AddToppingPhoto"
            placeholder="Photo Topping"
            className="w-full p-3 outline outline-2 outline-red-500 focus:outline-red-700 rounded-md bg-pink-100"
          />
          <button className="w-9/12 py-2 rounded-md text-white text-center bg-red-600">
            Add Topping
          </button>
        </form>
      </div>
      <div className="w-4/12">
        <img src="/img/topping5.png" alt="product" className="w-full" />
      </div>
    </div>
  );
}