import React, { ReactNode } from 'react'

const PageWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className=' bg-slate-50 flex-grow p-2 mt-16 text-black'>
      {children}
    </div>
  )
}

export default PageWrapper