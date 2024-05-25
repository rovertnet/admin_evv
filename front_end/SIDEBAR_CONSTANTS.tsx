import { sideNavitem } from "./types/Type";
import { FaHome } from "react-icons/fa";


export const SIDENAV_ITEM: sideNavitem[] = [
  {
    title: "DashBoard",
    path: "/",
    icon: <FaHome size={20} />,
  },
  {
    title: "DashBoard",
    path: "/departement",
    icon: <FaHome size={20} />,
    submenu: true,
    subMenuItem: [
      { title: "liste", path: "/depart" },
      { title: "ajout", path: "/depart/ajout" },
    ],
  },
  {
    title: "Documents",
    path: "/document",
    icon: <FaHome size={20} />,
  },
]