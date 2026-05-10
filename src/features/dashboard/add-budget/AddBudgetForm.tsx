"use client";
import { Toaster } from "react-hot-toast";
import { useState } from "react";


import Input from "@/components/Input";
import Spending from "../Spending";
// import InputBudget from "../InputBudget";
import NotificationValidation from "../NotificationValidation";

interface SpendingItem {
  id: number;
  name: string;
  amount: number;
  category: string;
}

const AddBudgetForm = () => {

  /* Tracks the budget amount */
  const [inputBudget, setInputBudget] = useState<number>(0);

  /* Tracks all the spendingitems basically an array */
  const [spending, setSpending] = useState<SpendingItem[]>([]);

  

  const getsetbudget = (value: string) => {
    setInputBudget(Number(value));
  };

  function form(e: FormData) {
    console.log(e);
  }

  return (
    <form action={form} className="py-4 px-6">
      <Toaster />

{/* This is a useEffct that will show notification when budget is negtive or spending overbudget */}
<NotificationValidation inputBudget={inputBudget} spending={spending} />

      <h2 className="text-2xl mb-2 ">Budget</h2>

      <div className="grid grid-cols-1 gap-2 mb-6">
        <Input id="budget-name" name="Budget name" type="text" />

        <InputBudget
          id="budget"
          name="Budget"
          type="number"
          inputBudget={inputBudget}
          handleChange={(e) => getsetbudget(e.target.value)}
        />
      </div>

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
export default AddBudgetForm;
