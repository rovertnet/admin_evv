import React from 'react';
import { IoMenuSharp } from "react-icons/io5";


const Header = () => {
  return (
    <>
      <header className="fixed w-full bg-gray-800 shadow-sm shadow-slate-500/40 z-0 px-4 pl-[20rem]">
        <div className="flex items-center justify-between h-16 px-3">
          <button className="bg-slate-700 px-1 py-1 rounded-md shadow-md shadow-slate-600 text-slate-300 transition duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-700 flex items-center justify-center">
            <IoMenuSharp size={28} />
          </button>
          <div className="flex items-center justify-center h-10 w-10 rounded-full text-center bg-slate-700 text-slate-300">
            <span className="font-semibold text-sm">RM</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header