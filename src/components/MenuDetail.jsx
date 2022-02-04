import React from "react";
import Topping from "./Topping";

export default function MenuDetail() {
  return (
    <div className="flex mx-28 my-10">
      <div className="w-5/12">
        <img className="w-96" src="/img/drink1.png" alt="logo" />
      </div>
      <div className="w-7/12">
        <h4 className='text-red-600 text-4xl font-bold font-["Avenir-Black"]'>
          Ice Coffee Palm Sugar
        </h4>
        <p className='text-lg text-red-400 mt-4 font-["Avenir-Black"]'>
          Rp 27.000
        </p>
        <p className="text-lg text-red-800 mt-12 font-bold">Topping</p>
        <div className="flex flex-wrap">
          {Topping.map((item) => (
            <div className="w-1/4 flex flex-col items-center mt-10 text-red-600 hover:opacity-75 cursor-pointer">
              <img src={`/img/toping${item.index}.png`} alt="logo" />
              <p>{item.toppingName}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-between mt-10 text-red-800 font-["Avenir-Black"] font-bold text-lg'>
          <p>Total</p>
          <p>Rp 31.000</p>
        </div>
        <button className="mt-5 w-full bg-red-600 border-2 border-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700">
          Add Chart
        </button>
      </div>
    </div>
  );
}
