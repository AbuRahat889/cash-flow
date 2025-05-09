/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'


import React from 'react'

import Header from '@/components/Header'
import { FaBangladeshiTakaSign } from 'react-icons/fa6'
import increment from '@/assets/increase-removebg-preview 1.svg'
import Image from 'next/image'
import { useGetExpencesQuery } from '@/redux/api/expence'


export default function Page() {

  const { data } = useGetExpencesQuery('')

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

      {/* table */}

      <div className="w-full mx-auto p-6">
        <div className="rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 shadow-md">
          {/* Header section */}
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-white text-xl font-medium">Transactions</h2>
            <div className="flex space-x-2">
              <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Newest</button>
              <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Oldest</button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full">
            {/* Table header */}
            <div className="grid grid-cols-5 px-6 py-3 text-white border-t border-white/20">
              <div className="font-medium">Name</div>
              <div className="font-medium">Status</div>
              <div className="font-medium">Date</div>
              <div className="font-medium text-right">Amount</div>
            </div>

            {/* Table row */}

            {
              data?.map((item: any, index: number) => (
                <div key={item._id} className="grid grid-cols-5 px-6 py-4 text-white border-t border-white/20">
                  <div>{index + 1}</div>
                  <div>{item.category}</div>
                  <div>
                    <span className="flex items-center line-clamp-1">
                      {item.description}
                    </span>
                  </div>

                  <div className="text-right">{item.amount}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>


    </div>
  )
}
