import { sideNavitem } from '@/types/Type'
import Link from 'next/link'
import React from 'react'

const SidebarMenuItem = ({item}:{item:sideNavitem}) => {
  return (
    <>
      {item.submenu ? (
        <div></div>
      ) : (
        <Link href={item.path} className="flex items-center min-h-[40px] h-full text-slate-300 py-2 px-4 hover:text-white transition duration-300">
          {item.icon}
          <span>{item.title}</span>
        </Link>
      )}
    </>
  );
}

export default SidebarMenuItem