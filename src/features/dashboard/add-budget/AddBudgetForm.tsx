"use client";
import Input from "@/components/Input";
import Spending from "./Spending";
import { useState } from "react";

const AddBudgetForm = () => {
  const [inputAmount, setInputAmount] = useState<number>();

  const getsetbudget = (value: string) => {
    setInputAmount(Number(value));
  };

  function form(e: any) {
    console.log(e);
  }

  return (
    <form action={form} className="bg-gray/5 py-4 px-6">
      <h2 className="text-2xl mb-2">Budget</h2>
      <div className="grid grid-cols-1 gap-2 mb-6">
        <Input id="budget-name" name="Budget name" type="text" />
        <Input
          id="budget"
          name="Budget"
          type="number"
          inputAmount={inputAmount}
          getsetbudget={getsetbudget}
        />
      </div>

      <Spending inputAmount={inputAmount} getsetbudget={getsetbudget} />

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
