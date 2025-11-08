"use client";

import { useState } from "react";
import { BsInfoLg } from "react-icons/bs";

const FormNotice = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setShowMessage((prev) => !prev);
    setClicked(true);

    // reset after animation duration (e.g., 300ms)
    setTimeout(() => setClicked(false), 700);
  };
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        className={`cursor-pointer p-2 rounded-2xl transition-all duration-300 
          shadow-2xl shadow-main 
          hover:shadow-sm 
          ${clicked && "scale-95 shadow-sm"}`}
      >
        <BsInfoLg className={`text-2xl`} />
      </button>

      <p
        className={`text-main font-medium transition-all duration-700 overflow-hidden
    ${
      showMessage
        ? "opacity-100 max-h-40 scale-100"
        : "opacity-0 max-h-0 scale-95"
    }`}
      >
        Remember: There is nothing wrong if the rule does not fit you. It is a
        rule, not a universal law. (50% &lt;= needs - 30% &gt;= wants - 20%
        &lt;= savings)
      </p>
    </div>
  );
};

export default FormNotice;
