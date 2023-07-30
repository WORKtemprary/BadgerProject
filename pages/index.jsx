

import SearchInput from '@/components/searchbar'
import Card from '@/components/Card'


export default function Home() {
   

    return (
        <>
      
           
            <div className="flex items-center justify-center mt-28">
            <SearchInput/>
            </div>
            <div className="flex items-center justify-center mt-30">
  <div className="w-[1298px] h-[473px] bg-gradient-to-b from-amber-200 via-amber-400 to-orange-500 rounded-[25px] border-2 border-amber-300">
    {/* Content goes here */}
  </div>
</div>

<div className="w-[1440px] h-[0px] mt-12 shadow border-2 border-red-800"></div>
<div className="flex items-center justify-center mt-12">
<div className="w-[1285px] bg-gradient-to-t from-amber-300  to-orange-300 rounded-[30px] border-2 border-red-800" >
<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 items-center p-6 justify-center">
      <Card/>
      <Card />
      <Card />
    <Card/>
      <Card />
      <Card />
    </div>
</div>
</div>
         
           
        </>
    )
}