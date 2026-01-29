import { MdSunny } from "react-icons/md";
import { GiEclipseFlare } from "react-icons/gi";

import { useDarkMode } from "@/context/DarkModeContext";

const SwitchMode = () => {
  const { DarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      type="button"
      className="py-4 px-2 w-full flex items-center gap-3 cursor-pointer"
      onClick={toggleDarkMode}
    >
      {DarkMode ? (
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
