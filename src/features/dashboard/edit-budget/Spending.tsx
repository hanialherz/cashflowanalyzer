"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { CgMinimize } from "react-icons/cg";


import { MdOutlineAdd } from "react-icons/md";
import SpendingForm from "./SpendingForm"



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
  const [minimize, setMinimize] = useState(nextId||null);

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
          <div key={s.id} className="mb-4 bg-l-black p-2 rounded not-dark:bg-gray-200">
            
<div className="flex items-center justify-between">
  
    <h3 className="flex items-center gap-2"><span>{index+1}</span>{s.name}</h3>

    <button type="button" className="cursor-pointer" onClick={()=>setMinimize(prev=> prev==s.id?null:s.id)}><CgMinimize className="text-2xl text-foreground/50" /></button>
  
</div>
           
           {minimize==s.id &&
           <SpendingForm items={s} delSpending={delSpending} />
           }


            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spending;
