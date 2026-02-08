import { signoutAction } from "@/lib/actions";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const AccountMenu = ({ children }: props) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Menu>
      <MenuButton
        className="cursor-pointer "
        // onClick={() => setIsOpen((prev) => !prev)}
      >
        {children}
      </MenuButton>

      <MenuItems
        anchor="bottom"
        className="z-20 bg-l-black text-foreground px-2 py-2 rounded-xl inset-ring-1 inset-ring-foreground/20 flex flex-col justify-center gap-4 not-dark:bg-white not-dark:text-[#3E3E3E]"
      >
        <MenuItem>
          <form action={signoutAction} className="flex items-center gap-2">
            <button
              type="submit"
              className="font-medium text-foregound cursor-pointer hover:text-inverted-main active:text-inverted-main"
            >
              Signout
            </button>
          </form>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default AccountMenu;
