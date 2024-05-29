import React, { ReactNode } from 'react';
import classNames from "classNames";
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';

const PageWrapper = ({children}:{children:ReactNode}) => {
  const {toggleCollaps} = useSidebarToggle();
  const pageStyle = classNames("bg-slate-50 flex-grow p-2 mt-16 text-black", {
    ["sm:pl-[20rem]"]: !toggleCollaps,
    ["sm:pl-[5.6rem]"]: toggleCollaps,
  });
  return (
    <div className={pageStyle} >
      {children}
    </div>
  )
}

export default PageWrapper