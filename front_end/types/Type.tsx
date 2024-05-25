export type sideNavitem = {
  title: string;
  path:string;
  icon: JSX.Element;
  submenu: boolean;
  subMenuItem: sideNavitem[];
};