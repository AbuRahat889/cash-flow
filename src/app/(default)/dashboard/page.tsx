import React from 'react'

import Header from '@/components/Header'
import { FaBangladeshiTakaSign } from 'react-icons/fa6'
import increment from '@/assets/increase-removebg-preview 1.svg'
import Image from 'next/image'


export default function page() {
  return (
    <div className='bg-[#A85CF9] w-screen p-10 container mx-auto' >
      <Header />

      <div className='bg-[#9041E3] p-6 rounded-xl mt-16 flex justify-between items-center'>
        <div className='w-1/2'>
          <h1 className='text-5xl font-bold'><span className='text-[#FAED26]'>Total</span> Balance</h1>
          <div className='flex items-center gap-3 py-6'>
            <FaBangladeshiTakaSign className='text-white size-11' />
            <h1 className='text-white text-5xl'>50000</h1>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-[#FAED26] text-lg leading-normal'>+ 0.5%</h1>
            <button className='bg-white rounded-full px-8 py-2 text-lg text-[#A85CF9] font-bold'>Deposit</button>
          </div>
        </div>

        <Image src={increment} alt="logo" width={500} height={500} className='h-48 w-48' />
      </div>

    </div>
  )
}
