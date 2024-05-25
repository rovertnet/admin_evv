import React, { ReactNode } from 'react'

const PageWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default PageWrapper