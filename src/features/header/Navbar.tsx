import { Session } from "next-auth";

import NavLeftItems from "./NavLeftItems";
import NavRightItems from "./NavRightItems";

interface NavbarProps {
  session: Session | null;
  menuOpen: boolean;
  action: () => void;
}

{
  /*menuOpen
          ? "opacity-100 scale-100 visible pointer-events-auto translate-y-0"
          : "opacity-0 invisible pointer-events-none -translate-y-full" */
}

const Navbar = ({ menuOpen, action, session }: NavbarProps) => {
  return (
    <nav
      className={`absolute backdrop-blur-sm overflow-hidden left-0 w-full z-10 transition-all duration-500 ${
        menuOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <ul className="bg-background/60 flex flex-col items-start justify-start gap-8 px-6 py-4  sm:flex-row sm:gap-4 sm:items-center sm:justify-between">
        <NavLeftItems action={action} />
        <NavRightItems session={session} action={action} />
      </ul>
    </nav>
  );
};
export default Navbar;
