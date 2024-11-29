import Link from "next/link";
import { FC } from "react";

interface MenuItemProps {
  name: string;
  url: string;
}

const MenuItem: FC<{ mn: MenuItemProps }> = ({ mn }) => {
  return <Link className="hidden md:inline" href={mn.url}>{mn.name}</Link>;
};

export default MenuItem;
