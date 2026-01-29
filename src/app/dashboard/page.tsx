
import DashboardList from "@/features/dashboard/DashboardList";
import Stats from "@/features/dashboard/Stats";

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
      <DashboardList budgetData={budgetData} />
    </div>
  );
};
export default Dashboard;
