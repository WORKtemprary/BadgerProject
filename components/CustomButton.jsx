import React from 'react';

const CustomButton = ({ text, onClick }) => {
  return (
   
    <div className="w-[140px] h-[53px] relative shadow">
    <div className="w-[140px] h-[53.23px] left-0 top-0 absolute rounded-2xl border border-red-800" />
    <div className="w-[140px] h-[53.23px] left-0 top-0 absolute bg-gradient-to-b from-orange-200 via-amber-300 to-orange-400 rounded-2xl border border-orange-500" />
    <div className="left-[25.65px] top-[15.29px] absolute text-center">
        <button        
            className='"text-red-800 text-xl font-semibold tracking-wider"'
            onClick={onClick}
        >
            {text}
        </button>
    </div>
    <div className="w-[8.52px] h-[4.26px] left-[17.30px] top-[7.45px] absolute bg-white bg-opacity-60 rounded-lg" />
    <div className="w-[12.78px] h-[4.26px] left-[27.95px] top-[7.45px] absolute bg-white bg-opacity-60 rounded-lg" />
</div>


          
  );
};

export default CustomButton;
