import React from 'react';

const Card2 = () => {
  return (
    <div className="w-[600px] h-[239px] bg-gradient-to-r from-orange-500 via-amber-300 to-orange-200 rounded-[20px] border border-red-800  flex ">
      <div className="flex  mt-4 left-0 lg:ml-4">
    
        <img className="w-[83px] h-[83px] rounded-full border border-red-800" src="https://via.placeholder.com/83x83" alt="Profile" />
        
      </div>
      <div className="flex flex-col w-1/4 mt-12 ml-12">
        <div className="text-white text-xl font-semibold mb-2">BALANCES</div>
        <div className="text-red-800 text-base font-normal">0000000.00 BADGER TOKENS</div>
      </div>
      <div className="w-1/2 flex flex-col mt-12 ml-12">
        <div className="text-white text-xl font-semibold">TIER INFO</div>
        <div className="text-red-800 text-base font-normal">
          Includes all the favorites and customizable charts
        </div>
      </div>
    </div>
  );
};

export default Card2;
