import { IconType } from "react-icons";
import { GrGroup, GrHome } from "react-icons/gr";

export const fontFamily = "quicksand";

export interface NavItem {
  Icon: IconType;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

export const navItems: NavItem[] = [
  { href: "", label: "Home", Icon: GrGroup },
  { href: "", label: "Users", Icon: GrHome },
];
