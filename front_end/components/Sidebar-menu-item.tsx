import { sideNavitem } from '@/types/Type'
import Link from 'next/link'
import React from 'react'

const SidebarMenuItem = ({item}:{item:sideNavitem}) => {
  return (
    <>
      {
        item.submenu
          ?(<div></div>)
          :(<Link href={item.path}>{item.title}</Link>)
      }
    </>
  )
}

export default SidebarMenuItem