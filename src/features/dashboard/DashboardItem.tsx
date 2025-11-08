import Link from "next/link";

interface props {
  id: number;
  name: string;
  budget: number;
}

const DashboardItem = ({ id, name, budget }: props) => {
  return (
    <li>
      <div className="bg-bg-shade/70 px-4 py-2 rounded-2xl">
        <div className="flex items-center gap-6 mb-4">
          <div
            className={`flex items-center justify-center rounded-2xl size-14 ${
              budget > 0 ? "bg-main/20" : "bg-gray/20"
            }`}
          ></div>

          <div>
            <p>{name}</p>
            <p>{budget} $</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link href={`/dashboard/${id}`} className="">
            Analyze
          </Link>
          <Link href="/dashboard/edit-budget">Edit</Link>
          <button className="cursor-pointer">Delete</button>
        </div>
      </div>
    </li>
  );
};
export default DashboardItem;
