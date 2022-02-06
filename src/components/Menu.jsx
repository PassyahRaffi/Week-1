import React from 'react';
import ProductCard from './ProductCard';

export default function Menu() {
  return (
    <div className='mx-28 my-10'>
      <div>
          <p className='text-red-600 font-["Avenir-Black"] font-bold text-4xl my-10'>Let's Order</p>
        </div>
        <div className='flex justify-between gap-x-8'>
          <a href="/product">
            <ProductCard productImage="drink1" name="Ice Coffee Palm Sugar" price="Rp.27.000"/>
          </a>
          <a href="/product">
            <ProductCard productImage="drink2" name="Ice Coffee Green tea" price="Rp.31.000"/>
          </a>
          <a href="/product">
            <ProductCard productImage="drink3" name="Hanami Latte" price="Rp.29.000"/>
          </a>
          <a href="/product">
            <ProductCard productImage="drink4" name="Clepon Coffee " price="Rp.28.000"/>
          </a>
        </div>
    </div>
  );
}