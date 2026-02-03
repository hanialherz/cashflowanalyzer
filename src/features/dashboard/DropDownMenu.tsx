import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactNode } from "react";

interface props {
  cID: number;
  toggleOpen: (i: number) => void;
  isOpen: number | undefined;
  Analyze: ReactNode;
  Edit: ReactNode;
}

const DropDownMenu = ({ cID, toggleOpen, isOpen, Analyze, Edit }: props) => {
  return (
    <Menu>
      <MenuButton
        className="bg-lighterblack rounded-xl p-1 not-dark:bg-gray/10 not-dark:text-[#3E3E3E]"
        onClick={() => toggleOpen(cID)}
      >
        Options
      </MenuButton>
      {isOpen == cID && (
        <MenuItems
          anchor="bottom"
          static={true}
          className="bg-l-black text-foreground px-6 py-2 rounded-2xl flex flex-col justify-center gap-4 not-dark:bg-white not-dark:text-[#3E3E3E]"
        >
          <MenuItem>{Analyze}</MenuItem>
          <MenuItem>{Edit}</MenuItem>
        </MenuItems>
      )}
    </Menu>
  );
};

export default DropDownMenu;
