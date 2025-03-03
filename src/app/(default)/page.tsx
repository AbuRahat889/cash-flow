import Image from 'next/image'
import React from 'react'
import { CiBellOn } from 'react-icons/ci'

import profile from '@/assets/profile.png'
import moneyIcon from '@/assets/Money_Icon.svg'

export default function page() {
  return (
    <div className='bg-[#A85CF9] w-screen p-10' >
       <div className='flex justify-end gap-5 items-center '>
          <CiBellOn className='h-12 w-12'/>

          <div className='flex items-center justify-between gap-5'>
            <h1 className='text-xl font-bold text-white'>Abu Rahat Shaum</h1>
            <Image src={profile} alt="logo" width={500} height={500} className='h-16 w-16 rounded-full ' />
          </div>      
      </div>
      

      <div className='flex justify-between items-center  bg-[#5534A5] p-10 rounded-lg mt-10'>
        <div className=''>
        <h1 className='text-6xl font-bold leading-normal'>Welcome Rahat!</h1>
        <h1 className='text-2xl font-semibold leading-normal'>CashFlow will <span className='text-[#FFF800]'>save you money</span></h1>
        <p className='text-xl font-normal leading-normal mt-7 '>Money management is the art of balancing your desires with your means, and finding harmony in both.</p> 

        <button className='text-xl font-bold bg-[#5B4CF3] px-3 py-2 mt-7 rounded-lg shadow-[0px_6px_25px_rgba(107,78,187,1)] '>Go To Dashboard</button>
      </div>
      <div>
        <Image src={moneyIcon} alt="logo" width={500} height={500} className='h-96 w-96 mt-10' />
      </div>
      </div>
    </div>  
  )
}
