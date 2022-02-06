import React from 'react';

export default function ProductCard(props) {
  return ( 
    <div className="bg-white">
        <div className="max-w-2xl mx-auto lg:max-w-7xl bg-red-300 rounded-lg">
            <div className="flex grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <a className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                    src={`/img/${props.productImage}.png`}
                    alt="logo"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"/>
                </div>
                <div className='mx-4 py-1'>
                    <h3 className="mt-4 text-red-600 font-['Avenir-Black'] text-lg">{props.name}</h3>
                    <p className="mt-1 text-lg font-medium text-red-500">{props.price}</p>
                </div>
                </a>
            </div>
        </div>
    </div> 
  )
}