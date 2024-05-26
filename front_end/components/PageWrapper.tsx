import React, { ReactNode } from 'react';
import classNames from "classNames";

const PageWrapper = ({children, toggleCollaps}:{children:ReactNode, toggleCollaps:boolean}) => {
  const pageStyle = classNames("bg-slate-50 flex-grow p-2 mt-16 text-black", {
    ["pl-[20rem]"]: !toggleCollaps,
    ["pl-[5.6rem]"]: toggleCollaps,
  });
  return (
    <div className={pageStyle} >
      {children}
    </div>
  )
}

export default PageWrapper