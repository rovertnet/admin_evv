import React from 'react';
import Image from 'next/image';
import { SIDENAV_ITEM } from '../SIDEBAR_CONSTANTS';

const SideBar = () => {
  return (
    <>
      <div className="fixed bg-gray-800 text-gray-400 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]">
        <div className='flex relative items-center py-8 px-3.5'>
          <Image src="/mon_logo.png" alt='' height={35} width={35} className='w-12 mx-3.5 min-h-fit'></Image>
          <h3 className='pl-3 font-bold text-2xl text-slate-300 min-w-max'>Admin E.V.V</h3>
        </div>
        <nav className="flex flex-col gap-2 transition duration-300">
          {
            SIDENAV_ITEM.map((item,index)=>{
              return <></>
            })
          }
        </nav>
      </div>
    </>
  )
}

export default SideBar