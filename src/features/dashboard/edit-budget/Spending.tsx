"use client";
import {  useState } from "react";

import { MdOutlineAdd } from "react-icons/md";



import Collapse from "@/components/Collapse";
import { UseFormRegister, UseFormWatch } from "react-hook-form";


interface SpendingItem {
  id: number;
  name: string;
  amount: number;
  category: string;
}

interface props
{

register:UseFormRegister<formInputs>;
watch:UseFormWatch<formInputs>;


}

type formInputs=
{
  id:number;
budgetName:string
budgetAmount:number
spendings:{id: number;name: string; category: string; amount: number; }[];

}

const Spending = ({ register,watch}: props) => {
  
  const [nextId, setNextId] = useState(0);
  

  const addSpending = () => {

    // watch((prev) => [
    //   ...prev,
    //   "spendings"
    // ]);

    /* Each time u add a spending to the array increment ID by 1 */
    setNextId((prev) => prev + 1);
  };

  // Upon a chnage from spending add it to the list for validation
 

  const delSpending = (id: number) => {
    // setSpending((prev) => prev.filter((s) => s.id !== id));
  };



  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl mb-2">
          {watch("spendings").length > 1 ? watch("spendings").length : ""} Spendings
        </h2>

        {watch("spendings").length < 50 && (
          <button
            type="button"
            onClick={addSpending}
            className="cursor-pointer"
          >
            <MdOutlineAdd className="text-4xl text-gray transition-all duration-300 hover:text-main active:text-main" />
          </button>
        )}
      </div>

      <div className={`overflow-y-scroll ${watch("spendings").length > 0 && "h-100"}`}>
        {watch("spendings").map((s, index) => (
<Collapse key={index}  items={s} index={index} delSpending={delSpending} register={register} watch={watch}/>

        ))}
      </div>
    </div>
  );
};

export default Spending;
