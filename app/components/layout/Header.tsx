"use client";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeBtn from "./ThemeBtn";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Header = () => {
  const router = useRouter();
  const [text, setText] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text.length >= 3) router.push(`/search/${text}`);
  };

  return (
    <header className="flex items-center gap-7 h-20 p-5 ">
      {isOpen && <Sidebar handleClose={() => setOpen(false)} />}
      <div className="bg-amber-600 p-3 text-2xl rounded-lg font-bold ">
        MovieApp
      </div>
      <div className="flex items-center  gap-2 p-3 border flex-1  rounded-lg">
        <input
          onKeyDown={searchHandle}
          onChange={(e) => setText(e.target.value)}
          placeholder="Arama yapınız"
          type="text"
          className="outline-none w-full"
        />
        <BiSearch size={25} />
      </div>
      <ThemeBtn />
      <GiHamburgerMenu className="md:hidden" onClick={() => setOpen(true)} size={25} />
      {menu.map((item, index) => (
        <MenuItem mn={item} key={index} />
      ))}
    </header>
  );
};

export default Header;
