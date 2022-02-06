import React from 'react';

export default function Jumbotron() {
  return (
      <div className='relative mx-28 md:my-10 md:w-10/12 md:m-auto'>
        <img className='ml-10' src="/img/jumbotron.png" alt="" />
        <img className='absolute right-0 top-10' src="/img/jumbotron-img.png" alt="" />   
        <div className='absolute top-16 left-20 text-white w-5/12'>
            <h4 className="font-['Freight'] text-6xl uppercase my-5">waysbucks</h4>
            <p>Things are changing, but we’re still here for you</p>
            <p>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available <br/><br/> Let’s Order...</p>
        </div>
      </div>
    )
}