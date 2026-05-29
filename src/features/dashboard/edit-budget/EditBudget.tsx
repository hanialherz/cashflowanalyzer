"use client"
import { useForm} from "react-hook-form";



import Spending from "./Spending";



import Budget from "./Budget";



interface props
{
  data:{ id: number; name: string; budget: number; spendings: { id: number; name: string; category: string; amount: number; }[]; } | undefined; 
}

type formInputs=
{
  id:number;
budgetName:string
budgetAmount:number
spendings:{id: number;name: string; category: string; amount: number; }[];

}



const EditBudgetForm = ({data}:props) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>({defaultValues:{id:data?.id,budgetName:data?.name||"",budgetAmount:data?.budget||0,spendings:data?.spendings||[]}});

  const budget=Number(watch("budgetAmount"));
  const summedSpendings=watch("spendings").reduce((sum, s) => sum + Number(s.amount), 0);

  function form(e: FormData) {
    
    console.log(e);
  }

  return (
    <form action={form} className="bg-gray/5 py-4 px-6">
      

      <h2 className="text-2xl mb-2 ">Budget</h2>

      <Budget register={register} errors={errors} watch={watch} />

      <Spending register={register} watch={watch}/>
<div>
  
  <h2 className={`${(budget-summedSpendings)>0? "text-main":"text-inverted-main"}`}>result is {budget-summedSpendings}</h2>
</div>
      <div className="flex flex-col justify-center gap-2">
        <button
          type="submit"
          className="font-medium cursor-pointer text-background bg-main py-2 w-full rounded-md transition-all duration-300 hover:inset-ring-1 hover:text-foreground hover:bg-transparent hover:inset-ring-main active:inset-ring-1 active:text-foreground active:bg-transparent active:inset-ring-main"
        >
          Add
        </button>
        <button
          type="reset"
          className="cursor-pointer py-2 px-5 rounded-md inset-ring-1 inset-ring-gray transition-all duration-300 hover:inset-ring-main active:inset-ring-main"
        >
          Clear
        </button>
      </div>
    </form>
  );
};
export default EditBudgetForm;
