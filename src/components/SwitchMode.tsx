"use client";
import { MdSunny } from "react-icons/md";
import { GiEclipseFlare } from "react-icons/gi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SwitchMode = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      type="button"
      className="py-4 px-2 w-full flex items-center gap-3 cursor-pointer"
      onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
    >
      {resolvedTheme == "dark" ? (
        <>
          <GiEclipseFlare className="text-2xl text-main" />
          <p className="text-xl text-main">Dark</p>
        </>
      ) : (
        <>
          <MdSunny className="text-2xl" />
          <p className="text-xl">Light</p>
        </>
      )}
    </button>
  );
};
export default SwitchMode;
