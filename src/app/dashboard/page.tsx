import Stats from "@/features/dashboard/Stats";
import DashboardItem from "@/features/dashboard/DashboardItem";
import { getBudgetData } from "@/lib/data";
/*note to self when it is time inner join the budget and spending database
and u can do the calculation of subtracting the spending from the curresponding budget that way
*/

const Dashboard = async () => {
  const budgetData = await getBudgetData();

  const numRecordes = budgetData.length;
  return (
    <div className="px-6 py-4 flex flex-col gap-8 ">
      <Stats numRecordes={numRecordes} />
      <div className="overflow-y-auto">
        <ul className="flex flex-col gap-4 h-92 overflow-y-scroll">
          {budgetData.map((i) => (
            <DashboardItem
              key={i.id}
              id={i.id}
              name={i.name}
              budget={i.budget}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;
