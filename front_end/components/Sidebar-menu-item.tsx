import { sideNavitem } from '@/types/Type'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from "react-icons/bi";

const SidebarMenuItem = ({item}:{item:sideNavitem}) => {
  const LinkStyle =
    "flex items-center min-h-[40px] h-full text-slate-400 py-2 px-4 hover:text-white transition duration-300";
    const ddLinkStyle = LinkStyle;
    const subMenuDropDowm =
      "text-slate-400 hover:text-white transition duration-300";
  return (
    <>
      {item.submenu ? (
        <div className="rounded-md min-w-[18px]">
          <a className={ddLinkStyle}>
            {item.icon}
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
            <BiChevronRight className='ml-auto stroke-2 text-lg' />
          </a>
          <div className="bg-gray-600 border-l-4">
            <div className="grid gap-y-2 px-10 py-3 leading-5">
              {
                item.subMenuItem.map((subItem, index)=>{
                  return(
                    <Link href={subItem.path} key={index} className={subMenuDropDowm} >
                      <span> {subItem.title} </span>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      ) : (
        <Link href={item.path} className={LinkStyle}>
          {item.icon}
          <span className="ml-3 leading-6 font-semibold">{item.title}</span>
        </Link>
      )}
    </>
  );
}

export default SidebarMenuItem