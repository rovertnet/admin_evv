"use client";
import { sideNavitem } from "@/types/Type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const SidebarMenuItem = ({ item, toggleCollaps }: { item: sideNavitem, toggleCollaps:boolean}) => {
  const LinkStyle =
    "flex items-center min-h-[40px] h-full text-slate-400 py-2 px-4 hover:text-white transition duration-300";
  const ddLinkStyle = LinkStyle;
  const subMenuDropDowm =
    "text-slate-400 py-2 px-4 hover:text-white transition duration-300";
  const [showSubMenu, setShowSubMenu] = useState(false);
  const openSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  }
  const pathName = usePathname();
  const activeLinkStyle = "rounded-md text-white light:text-black light:bg-slate-500 bg-gray-600"
  return (
    <>
      {item.submenu ? (
        <div className="rounded-md min-w-[18px]">
          <a
            className={`${ddLinkStyle} ${
              pathName.includes(item.path) ? activeLinkStyle : ""
            }`}
            onClick={openSubMenu}
          >
            {item.icon}
            {!toggleCollaps && (
              <>
                <span className="ml-3 leading-6 font-semibold">
                  {item.title}
                </span>
                <BiChevronRight className={`${showSubMenu ? 'rotate-90' : ''} ml-auto stroke-2 text-lg`} />
              </>
            )}
          </a>
          {showSubMenu && (
            <div className="bg-gray-600 border-l-4">
              <div className="grid gap-y-2 px-10 py-3 leading-5">
                {item.subMenuItem.map((subItem, index) => {
                  return (
                    <Link
                      href={subItem.path}
                      key={index}
                      className={`${subMenuDropDowm} ${
                        subItem.path === pathName ? "text-white" : ""
                      }`}
                    >
                      <span> {subItem.title} </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`${LinkStyle} ${
            item.path === pathName ? activeLinkStyle : ""
          }`}
        >
          {item.icon}
          {!toggleCollaps && (
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
          )}
        </Link>
      )}
    </>
  );
};

export default SidebarMenuItem;
