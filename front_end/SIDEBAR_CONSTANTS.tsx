import { sideNavitem } from "./types/Type";
import { FaHome } from "react-icons/fa";
import { SlDocs } from "react-icons/sl";
import { MdHelp } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";


export const SIDENAV_ITEM: sideNavitem[] = [
  {
    title: "DashBoard",
    path: "/",
    icon: <FaHome size={20} />,
  },
  {
    title: "Département",
    path: "/departement",
    icon: <HiMiniBuildingOffice2 size={20} />,
    submenu: true,
    subMenuItem: [
      { title: "liste", path: "/depart" },
      { title: "ajout", path: "/depart/ajout" },
    ],
  },
  {
    title: "Documents",
    path: "/document",
    icon: <SlDocs size={20} />,
  },
  {
    title: "Aide",
    path: "/help",
    icon: <MdHelp size={20} />,
  },
];