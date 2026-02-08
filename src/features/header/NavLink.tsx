import Link from "next/link";
import { ReactNode } from "react";

interface props {
  location: string;
  closeNavAction: () => void;
  children: ReactNode;
}

const NavLink = ({ location, closeNavAction, children }: props) => {
  return (
    <Link
      href={location}
      className="size-full py-4 px-2 flex items-center gap-3 sm:justify-center md:justify-start"
      onClick={closeNavAction}
    >
      {children}
    </Link>
  );
};
export default NavLink;
