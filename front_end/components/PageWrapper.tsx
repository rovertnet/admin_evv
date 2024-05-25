import React, { ReactNode } from 'react'

const PageWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className=' bg-slate-50 flex-grow p-2 mt-16 text-black pl-[20.4rem]'>
      {children}
    </div>
  )
}

export default PageWrapper