import Navbar from '@/components/Navbar';
import React from 'react'

import { ReactNode } from 'react';

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className="flex min-h-screen container mx-auto">
      <Navbar/>
      {children}</div>
  )
}
