import { sideNavitem } from '@/types/Type'
import Link from 'next/link'
import React from 'react'

const SidebarMenuItem = ({item}:{item:sideNavitem}) => {
  return (
    <>
      {item.submenu ? (
        <div></div>
      ) : (
        <Link href={item.path} className="flex space-x-2">
          {item.icon}
          <span>{item.title}</span>
        </Link>
      )}
    </>
  );
}

export default SidebarMenuItem