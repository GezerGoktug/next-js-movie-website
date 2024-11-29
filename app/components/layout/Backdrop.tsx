import React, { ReactNode } from 'react'

const Backdrop = ({children}:{children:ReactNode}) => {
  return (
    <div className='fixed top-0 left-0  z-50 w-full h-full bg-black/50'>
        {children}
    </div>
  )
}

export default Backdrop