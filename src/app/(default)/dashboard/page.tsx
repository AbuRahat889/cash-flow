import Image from 'next/image'
import React from 'react'
import { CiBellOn } from 'react-icons/ci'

import profile from '@/assets/profile.png'
import { IoSearchOutline } from 'react-icons/io5'


export default function page() {
  return (
    <div className='bg-[#A85CF9] w-screen p-10' >
      <div className='flex justify-between items-center '>
                <div className='flex items-center justify-between bg-white rounded-full py-1 px-5 w-1/2'>
                  <input type="search" />
                  <IoSearchOutline className='text-[#5534A5] size-12 ' />
                </div>
         <div className='flex justify-end gap-5 items-center '>
          <CiBellOn className='h-12 w-12'/>
     
          <div className='flex items-center justify-between gap-5'>
            <h1 className='text-xl font-bold text-white'>Abu Rahat Shaum</h1>
            <Image src={profile} alt="logo" width={500} height={500} className='h-16 w-16 rounded-full ' />
          </div>
             
      </div>
      </div>
      

     
    </div>  
  )
}
