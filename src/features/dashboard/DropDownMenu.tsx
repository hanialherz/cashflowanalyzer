import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactNode } from "react";

interface props {
  cID: number;

  Analyze: ReactNode;
  Edit: ReactNode;
  isOpen: number | undefined;
  toggleOpen: (i: number) => void;
}

const DropDownMenu = ({ cID, Analyze, Edit, isOpen, toggleOpen }: props) => {
  return (
    <Menu>
      <MenuButton
        className="bg-lighterblack rounded-xl p-1 cursor-pointer not-dark:bg-gray/10 not-dark:text-[#3E3E3E]"
        onClick={() => toggleOpen(cID)}
      >
        Options
      </MenuButton>

      {isOpen == cID ? (
        <MenuItems
          anchor="bottom"
          static={true}
          className="bg-l-black text-foreground px-6 py-2 rounded-2xl flex flex-col justify-center gap-4 inset-ring-1 inset-ring-foreground/20 not-dark:bg-white not-dark:text-[#3E3E3E]"
        >
          <MenuItem>{Analyze}</MenuItem>
          <MenuItem>{Edit}</MenuItem>
        </MenuItems>
      ) : null}
    </Menu>
  );
};

export default DropDownMenu;
