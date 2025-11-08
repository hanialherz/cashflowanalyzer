import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";

interface StatProps {
  numRecordes: number;
}

const Stats = ({ numRecordes }: StatProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-col">
        <p className="text-gray">Records</p>
        <p className="text-3xl">{numRecordes ? numRecordes : "0"}</p>
      </div>

      {numRecordes < 30 && (
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/dashboard/add-budget"
            className="flex items-center justify-center p-2 rounded-2xl text-gray inset-ring-1 inset-ring-gray transition duration-300 bg-transparent hover:inset-ring-main active:inset-ring-main hover:text-main active:text-main"
          >
            <MdOutlineAdd className="text-4xl" />
          </Link>
        </div>
      )}
    </div>
  );
};
export default Stats;
