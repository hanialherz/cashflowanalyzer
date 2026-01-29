import { CgMinimize } from "react-icons/cg";
import { IoMdExpand } from "react-icons/io";

interface props {
  index: number;
  minimized: number[];
  toggleMinimize: (index: number) => void;
}

const ToggleSpending = ({ index, minimized, toggleMinimize }: props) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-2xl">{index + 1}</p>
      <button
        type="button"
        onClick={() => toggleMinimize(index)}
        className="text-2xl text-gray transition-all duration-300 hover:text-main"
      >
        {minimized.includes(index) ? (
          <CgMinimize className="cursor-pointer" />
        ) : (
          <IoMdExpand className="cursor-pointer" />
        )}
      </button>
    </div>
  );
};
export default ToggleSpending;
