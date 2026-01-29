"use client";
import { useState, useEffect } from "react";

export const useLocalStorageState = (initialState: boolean, key: string) => {
  // if there is a darkmode exist then fetch it other wise create one in the local storage
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
