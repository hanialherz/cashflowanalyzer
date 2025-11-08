import { IoMdLogIn } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePercentage } from "react-icons/ai";
import Link from "next/link";

import NavLink from "./NavLink";

interface MobileNavbarProps {
  menuOpen: boolean;
  action: () => void;
}

const Navbar = ({ menuOpen, action }: MobileNavbarProps) => {
  return (
    <nav
      className={`absolute bg-background/60 backdrop-blur-xl overflow-hidden left-0 w-full z-10 transition-all duration-700 ${
        menuOpen
          ? "opacity-100 scale-100 visible pointer-events-auto translate-y-0"
          : "invisible pointer-events-none -translate-y-full"
      }`}
    >
      <ul className="flex flex-col items-center justify-evenly gap-8 px-6 py-8 sm:flex-row">
        <NavLink>
          <Link
            href="/"
            className="py-4 px-2 flex items-center gap-3"
            onClick={action}
          >
            <span>
              <AiOutlineHome className="text-2xl" />
            </span>
            <p className="text-xl">Home</p>
          </Link>
        </NavLink>

        <NavLink>
          <Link
            href="/dashboard"
            className="py-4 px-2 flex items-center gap-3  "
            onClick={action}
          >
            <span>
              <BiSolidDashboard className="text-2xl" />
            </span>
            <p className="text-xl">Dashboard</p>
          </Link>
        </NavLink>

        <NavLink>
          <Link
            href="/50-30-20"
            className="py-4 px-2 flex items-center gap-3  "
            onClick={action}
          >
            <span>
              <AiOutlinePercentage className="text-2xl" />
            </span>
            <p className="text-xl">50-30-20</p>
          </Link>
        </NavLink>

        <NavLink>
          <Link
            href="/signin"
            className="py-4 px-2 flex items-center gap-3"
            onClick={action}
          >
            <span>
              <IoMdLogIn className="text-2xl" />
            </span>
            <p className="text-xl">Sign in</p>
          </Link>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
