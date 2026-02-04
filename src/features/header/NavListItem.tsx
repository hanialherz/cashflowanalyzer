import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const NavListItem = ({ children }: props) => {
  return (
    <li className="py-4 px-2 w-full text-foreground/65 rounded-2xl overflow-hidden transition-colors duration-400 sm:w-14 md:w-44 hover:text-main hover:bg-l-black active:text-main active:bg-l-black not-dark:hover:bg-l-black/5 not-dark:active:bg-l-black/5">
      {children}
    </li>
  );
};
export default NavListItem;
