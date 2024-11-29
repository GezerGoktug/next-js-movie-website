"use client";

import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { ReactNode } from "react";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

const Overlay = ({ children }: { children: ReactNode }) => {
  const overlay: HTMLElement | null = document.getElementById("overlay");
  return (
    <>{overlay && createPortal(<Backdrop>{children}</Backdrop>, overlay)}</>
  );
};

const Sidebar = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Overlay>
      <div className="bg-gray-900 w-[60%] ms-auto h-full p-8 relative">
        <FaXmark
          onClick={handleClose}
          className="absolute top-8 right-8 text-4xl"
        />
        <div className="bg-amber-600 p-3 text-2xl rounded-lg font-bold w-max ">
          MovieApp
        </div>
        <div className="flex flex-col gap-6 mt-16 text-3xl font-bold">
          <Link href="/about">About</Link>
          <Link href="/login">Sign In</Link>
        </div>
      </div>
    </Overlay>
  );
};

export default Sidebar;
