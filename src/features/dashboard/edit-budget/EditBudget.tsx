"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";


import Spending from "./Spending";

import NotificationValidation from "../NotificationValidation";

import Budget from "./Budget";



interface props
{
  data:{ id: number; name: string; budget: number; spendings: { id: number; name: string; category: string; amount: number; }[]; } | undefined; 
}




const EditBudgetForm = ({data}:props) => {



    
    

  /* Tracks the budget amount */
  const [inputBudget, setInputBudget] = useState<number>(data?.budget||0);

  /* Tracks all the spendingitems basically an array */
  const [spending, setSpending] = useState(data?.spendings||[]);

  const getsetbudget = (value: string) => {
    setInputBudget(Number(value));
  };

  function form(e: FormData) {
    const budget=Number(e.get("Budget"));
    if(budget<0)return;
    console.log(e);
  }

  return (
    <form action={form} className="bg-gray/5 py-4 px-6">
      <Toaster />

      {/* This is a useEffct that will show notification when budget is negtive or spending overbudget */}
      <NotificationValidation inputBudget={inputBudget} spending={spending} />

      <h2 className="text-2xl mb-2 ">Budget</h2>

      <Budget data={data} inputBudget={inputBudget} getsetbudget={(e)=>getsetbudget(e.target.value)}/>

      <Spending spending={spending} setSpending={setSpending} />

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
