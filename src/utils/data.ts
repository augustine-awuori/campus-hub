import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { GrGroup } from "react-icons/gr";

export const fontFamily = "quicksand";

export interface NavItem {
  Icon: IconType;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

export const navItems: NavItem[] = [
  { href: "", label: "Home", Icon: GoHome },
  { href: "", label: "Users", Icon: GrGroup },
];
