import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const NavLink = ({ children }: props) => {
  return (
    <li className="w-full text-gray rounded-2xl overflow-hidden transition-colors duration-400 hover:text-main hover:bg-l-black active:text-main active:bg-l-black not-dark:hover:bg-l-black/5 not-dark:active:bg-l-black/5">
      {children}
    </li>
  );
};
export default NavLink;
