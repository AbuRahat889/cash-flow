import React from 'react'

import { ReactNode } from 'react';

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className="flex min-h-screen">
      <Navbar/>
      {children}</div>
  )
}
