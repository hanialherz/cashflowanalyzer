import Image from "next/image";
import SwitchMode from "./SwitchMode";
import NavLink from "./NavLink";
import { IoMdLogIn } from "react-icons/io";
import { Session } from "next-auth";

interface props {
  session: Session | null;
  action: () => void;
}

const NavRightItems = ({ session, action }: props) => {
  return (
    <div className="flex items-center justify-start  gap-4 sm:justify-end">
      <li className="shrink-0 p-4 flex items-center justify-center text-foreground/65 rounded-2xl overflow-hidden transition-colors duration-400 hover:text-main hover:bg-l-black active:text-main active:bg-l-black not-dark:hover:bg-l-black/5 not-dark:active:bg-l-black/5">
        <SwitchMode />
      </li>

      {session?.user?.image ? (
        <li className="rounded-full overflow-hidden shrink-0 flex items-center justify-center ring-1 ring-main">
          <Image
            height={32}
            width={32}
            src={session.user.image}
            className=""
            alt="user profile picture"
          />
        </li>
      ) : (
        <li className="shrink-0">
          <NavLink location="/signin" closeNavAction={action}>
            <span>
              <IoMdLogIn className="text-2xl" />
            </span>
          </NavLink>
        </li>
      )}
    </div>
  );
};
export default NavRightItems;
