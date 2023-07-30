/* eslint-disable jsx-a11y/alt-text */
import MetaData from '@/components/MetaData';
import Profile from '@/components/icons/p'
import Card from '@/components/Card'

import Card2 from '@/components/Card2'
import CustomButton from '@/components/CustomButton';

const handleLogout = () => {
  // Implement your logout logic here
  console.log('Logging out...');
};
export default function Gsap() {
    return(
        <>
            <MetaData
                title="GSAP"
            />
 <div className='mt-10 md:mt-16 lg:mt-24 grid gap-16 sm:gap-20 md:gap-20 justify-center md:grid-cols-2'>
  <div className=' w-60 h-60 xl:pl-12 lg:pl-12'>
    <Profile />
    <div className="text-white text-lg md:text-xl lg:text-2xl font-normal tracking-wider md:mt-4">Username</div>
  <div className="text-red-800 text-base md:text-lg lg:text-xl font-normal md:mt-2">xyzmyemail@gmail.com</div>
 
    
  </div>
 <div className='lg:pr-12 xl:pr-12 pr-8'>
 <Card2/>
  </div>
</div>

<div className='mt-12'>
<div className=" pl-12 py-4 text-white text-[42px] font-normal capitalize">Favorites :</div>
<div className="flex items-center justify-center ">
<div className="w-full max-w-[1287px] bg-gradient-to-t from-amber-400 to-orange-400 rounded-[40px] border-2 border-red-800  md:p-8 sm:pl-8">
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center">
    <Card/>
    <Card />
    <Card />
  </div>
</div>


</div>
</div>
<div class="flex items-center justify-center mt-12">
<CustomButton text="LOG OUT" onClick={handleLogout} />
            
</div>   
        </>
    );
}