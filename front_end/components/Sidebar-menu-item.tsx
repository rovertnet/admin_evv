import { sideNavitem } from '@/types/Type'
import Link from 'next/link'
import React from 'react'

const SidebarMenuItem = ({item}:{item:sideNavitem}) => {
  const LinkStyle =
    "flex items-center min-h-[40px] h-full text-slate-300 py-2 px-4 hover:text-white transition duration-300";
  return (
    <>
      {item.submenu ? (
        <div></div>
      ) : (
        <Link href={item.path} className={LinkStyle}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      )}
    </>
  );
}

export default SidebarMenuItem