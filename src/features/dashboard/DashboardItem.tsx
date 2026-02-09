import Link from "next/link";
import DeleteBudgetConfirm from "./DeleteBudgetConfirm";
import DropDownMenu from "./DropDownMenu";

interface props {
  id: number;
  name: string;
  budget: number;
}

const DashboardItem = ({ id, name, budget }: props) => {
  return (
    <li>
      <div className="bg-bg-shade/70 px-4 py-2 rounded-2xl not-dark:bg-l-black/5 not-dark:text-gray">
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

        <div className="flex items-center gap-4">
          <DropDownMenu cID={id} isOpen={isOpen}>
            <button
              type="button"
              className="bg-lighterblack rounded-xl p-1 cursor-pointer not-dark:bg-gray/10 not-dark:text-[#3E3E3E]"
              onClick={() => toggleOpen(id)}
            >
              open
            </button>
          </DropDownMenu>

          <DeleteBudgetConfirm budgetName={name} />
        </div>
      </div>
    </li>
  );
};
export default DashboardItem;
