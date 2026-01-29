"use client";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";

interface props {
  children: ReactNode;
}

const DarkModeContext = createContext({}); // Context is outside the component

const DarkModeProvider = ({ children }: props) => {
  const [DarkMode, setDarkMode] = useLocalStorageState(
    // Get the browser mode is it dark then true
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false,
    "DarkMode",
  );

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [DarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((dark: boolean) => !dark);
  };

  // Use useMemo to optimize performance and prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ DarkMode, toggleDarkMode }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DarkMode],
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkMode };
