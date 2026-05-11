"use client";
import { Dispatch, SetStateAction, useState } from "react";

import { MdOutlineAdd } from "react-icons/md";



import Collapse from "@/components/Collapse";


interface SpendingItem {
  id: number;
  name: string;
  amount: number;
  category: string;
}

interface props {
  spending: SpendingItem[];
  setSpending: Dispatch<SetStateAction<SpendingItem[]>>;
}

const Spending = ({ spending, setSpending }: props) => {
  
  const [nextId, setNextId] = useState(0);
  

  const addSpending = () => {
    setSpending((prev) => [
      ...prev,
      { id: nextId, name: "", amount: 0, category: "" }, // default values
    ]);

    /* Each time u add a spending to the array increment ID by 1 */
    setNextId((prev) => prev + 1);
  };

  // Upon a chnage from spending add it to the list for validation
 

  const delSpending = (id: number) => {
    setSpending((prev) => prev.filter((s) => s.id !== id));
  };



  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl mb-2">
          {spending.length > 1 ? spending.length : ""} Spendings
        </h2>

        {spending.length < 50 && (
          <button
            type="button"
            onClick={addSpending}
            className="cursor-pointer"
          >
            <MdOutlineAdd className="text-4xl text-gray transition-all duration-300 hover:text-main active:text-main" />
          </button>
        )}
      </div>

      <div className={`overflow-y-scroll ${spending.length > 0 && "h-100"}`}>
        {spending.map((s, index) => (
<Collapse key={index}  items={s} index={index} delSpending={delSpending}/>

        ))}
      </div>
    </div>
  );
};

export default Spending;
