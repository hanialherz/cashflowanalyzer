import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogIn } from "react-icons/io";

import SwitchMode from "./SwitchMode";
import AccountMenu from "@/components/AccountMenu";

interface props {
  session: Session | null;
  action: () => void;
}

const NavRightItems = ({ session, action }: props) => {
  return (
    <div className="flex items-center justify-start  gap-4 sm:justify-end">
      {session?.user?.image ? (
        <li className="rounded-full overflow-hidden shrink-0 flex items-center justify-center ring-1 ring-foreground/70 transition-all duration-300 hover:ring-1 hover:ring-main active:ring-1 active:ring-main">
          <AccountMenu>
            <Image
              height={32}
              width={32}
              src={session.user.image}
              alt="user profile picture"
              referrerPolicy="no-referrer"
            />
          </AccountMenu>
        </li>
      ) : (
        <li className="shrink-0 flex items-center justify-center text-foreground/65 rounded-2xl overflow-hidden transition-colors duration-400 hover:text-main hover:bg-l-black active:text-main active:bg-l-black not-dark:hover:bg-l-black/5 not-dark:active:bg-l-black/5">
          <Link
            href="/signin"
            onClick={action}
            className="size-full p-4 cursor-pointer flex items-center justify-center"
          >
            <IoMdLogIn className="text-2xl" />
          </Link>
        </li>
      )}

      <li className="shrink-0 flex items-center justify-center text-foreground/65 rounded-2xl overflow-hidden transition-colors duration-400 hover:text-main hover:bg-l-black active:text-main active:bg-l-black not-dark:hover:bg-l-black/5 not-dark:active:bg-l-black/5">
        <SwitchMode />
      </li>
    </div>
  );
};
export default NavRightItems;
