import EditBudgetForm from "@/features/dashboard/edit-budget/EditBudget";

import { getBudgetDataById } from "@/lib/data";


interface paramprops {
  params: {
    id: string;
  };
}



const page = async ({params}:paramprops) => {
const { id } = await params;

  const data=await getBudgetDataById(Number(id));

  return <EditBudgetForm data={data} />;
};
export default page;
