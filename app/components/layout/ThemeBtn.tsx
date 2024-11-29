"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiDark onClick={()=>setTheme("light")} size={25} cursor="pointer" />
        ) : (
          <CiLight onClick={()=>setTheme("dark")} size={25} cursor="pointer" />
        ))}
    </div>
  );
};

export default ThemeBtn;
