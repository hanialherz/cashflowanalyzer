"use client";
import { MdSunny } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";

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
      className="size-full p-4 cursor-pointer flex items-center justify-center"
      onClick={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
    >
      {resolvedTheme == "dark" ? (
        <FaMoon className="text-2xl" />
      ) : (
        <MdSunny className="text-2xl" />
      )}
    </button>
  );
};
export default SwitchMode;
