import React from 'react'

import { ReactNode } from 'react';

export default function layout({children}: {children: ReactNode}) {
  return (
    <div>{children}</div>
  )
}
