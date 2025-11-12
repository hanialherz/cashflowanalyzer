"use client";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";

import Input from "@/components/Input";
import Spending from "../Spending";
import InputBudget from "../InputBudget";

interface SpendingItem {
  id: number;
  name: string;
  amount: number;
  category: string;
}

const EditBudgetForm = () => {

  

  /* Tracks the budget amount */
  const [inputBudget, setInputBudget] = useState<number>(0);

  /* Tracks all the spendingitems basically an array */
  const [spending, setSpending] = useState<SpendingItem[]>([]);

  /* When the spendings go over the budget show a notification */
  useEffect(() => {


    const allspendings = spending.reduce((sum, s) => sum + s.amount, 0);
    const result = inputBudget - allspendings;

    if(inputBudget<0){toast.custom(
      <div className="p-4 bg-[#413f41]/80 text-foreground rounded-xl flex items-center gap-2">
        <PiWarningCircleLight className="text-3xl text-inverted-main" />
        <p>Budget cannot be negative</p>
      </div>,
      { id: "negative-budget", duration: Infinity }
    );
  
  }else if (result < 0) {
    toast.custom(
      <div className="p-4 bg-[#413f41]/80 text-foreground rounded-xl flex items-center gap-2">
        <PiWarningCircleLight className="text-3xl text-main" />
        <p>You went over the budget</p>
      </div>,
      { id: "over-budget", duration: Infinity }
    );

  } else {
    toast.dismissAll();
  }

// Cleanup on unmount
  return () => toast.dismissAll();

  }, [inputBudget, spending]);

  const getsetbudget = (value: string) => {
    setInputBudget(Number(value));
  };

  function form(e: FormData) {
    console.log(e);
  }

  return (
    <form action={form} className="bg-gray/5 py-4 px-6">
      <Toaster />
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
export default EditBudgetForm;
