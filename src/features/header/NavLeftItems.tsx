import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import NavLink from "./NavLink";
import NavListItem from "./NavListItem";
import { BiSolidDashboard } from "react-icons/bi";
import LinkLabel from "./LinkLabel";

interface props {
  action: () => void;
}

const NavLeftItems = ({ action }: props) => {
  return (
    <div className="w-full flex flex-col justify-start sm:flex-row sm:items-center sm:justify-start gap-8">
      <NavListItem>
        <NavLink location="/" closeNavAction={action}>
          <span>
            <AiOutlineHome className="text-2xl" />
          </span>
          <LinkLabel label="Home" />
        </NavLink>
      </NavListItem>

      <NavListItem>
        <NavLink location="/dashboard" closeNavAction={action}>
          <span>
            <BiSolidDashboard className="text-2xl" />
          </span>
          <LinkLabel label="Dashboard" />
        </NavLink>
      </NavListItem>

      <NavListItem>
        <NavLink location="/50-30-20" closeNavAction={action}>
          <span>
            <AiOutlinePercentage className="text-2xl" />
          </span>
          <LinkLabel label="50-30-20" />
        </NavLink>
      </NavListItem>
    </div>
  );
};
export default NavLeftItems;
