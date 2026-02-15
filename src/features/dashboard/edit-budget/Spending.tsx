"use client";
import { Dispatch, SetStateAction, useState } from "react";


import { MdOutlineAdd } from "react-icons/md";

import ToggleSpending from "./ToggleSpending";

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
  const [minimized, setMinimized] = useState<number[]>([]); // keep track of minimized indexes
  const [nextId, setNextId] = useState(0);
const [changedCategory,setChangedCategory]=useState("");
  const addSpending = () => {
    setSpending((prev) => [
      ...prev,
      { id: nextId, name: "", amount: 0, category: "food-drinks" }, // default values
    ]);

    /* Each time u add a spending to the array increment ID by 1 */
    setNextId((prev) => prev + 1);
  };

  // Upon a chnage from spending add it to the list for validation
  const handleAmountChange = (id: number, value: number) => {
    setSpending((prev) =>
      prev.map((s) => (s.id === id ? { ...s, amount: value } : s))
    );
  };

  const delSpending = (id: number) => {
    setSpending((prev) => prev.filter((s) => s.id !== id));
  };

  const toggleMinimize = (index: number) => {
    setMinimized(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // remove if already minimized
          : [...prev, index] // add if not minimized
    );
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
          <div key={s.id} className="mb-4 bg-l-black p-2 rounded not-dark:bg-[#bebfc576]">
            

            <ToggleSpending
              index={index}
              minimized={minimized}
              toggleMinimize={toggleMinimize}
            />


            <div
              className={`grid grid-cols-1 gap-4 transition-all duration-300 ${
                minimized.includes(index) && "hidden"
              }`}
            >
              <div className="flex flex-col gap-2 ">
      <label htmlFor={`spending-name-${index}`} className="font-medium">
        name
      </label>

      
        <input
          type="text"
          id={`spending-name-${index}`}
          name={`spending-name-${index}`}
          defaultValue={s.name}
          required
          className={`py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0]  ${
            (!s.name &&
              "outline-2 -outline-offset-2 outline-inverted-main  focus-within:outline-inverted-main")
          }`}
          
        />
      

      
    </div>
              

<div className="flex flex-col gap-2 ">
      <label htmlFor={`spending-amount-${index}`} className="font-medium">
        Spending
      </label>

      
        <input
          type="number"
          id={`spending-amount-${index}`}
          name={`spending-amount-${index}`}
          defaultValue={s.amount}
          required
          className={`py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0]  ${
            !s.amount ||
            (s.amount <= 0 &&
              "outline-2 -outline-offset-2 outline-inverted-main  focus-within:outline-inverted-main")
          }`}
          onChange={(e) =>
                  handleAmountChange(s.id, Number(e.target.value))}
        />
      

      
    </div>


              <div className="flex flex-col justify-center gap-2">
                <label htmlFor={`category-${index}`} className="font-medium">
                  Category
                </label>
                <select
                  id={`category-${index}`}
                  name="category"
                  className="py-3 px-2 rounded-md bg-lighterblack not-dark:bg-[#F0F0F0]"
                
value={s.category}
                  
onChange={(e)=>setChangedCategory(e.target.value)}
                >
                  <option value="food-drinks">Food & Drinks</option>
                  <option value="housing">Housing</option>
                  <option value="utilities">Utilities</option>
                  <option value="transportation">Transportation</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="insurance">Insurance</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="travel">Travel</option>
                  <option value="education">Education</option>
                  <option value="personal-care">Personal Care</option>
                  <option value="clothing">Clothing</option>
                  <option value="gifts-donations">Gifts & Donations</option>
                  <option value="savings-investments">
                    Savings & Investments
                  </option>
                  <option value="debt">Debt Payments</option>
                  <option value="taxes">Taxes</option>
                  <option value="home-maintenance">Home Maintenance</option>
                  <option value="childcare">Childcare</option>
                  <option value="pets">Pets</option>
                  <option value="communication">Communication</option>
                  <option value="work-expenses">Work Expenses</option>
                  <option value="fees">Fees</option>
                  <option value="misc">Miscellaneous</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="button"
                className="font-medium cursor-pointer py-2 w-full rounded-md transition-all duration-300 hover:inset-ring-1 hover:text-foreground hover:bg-transparent hover:inset-ring-foreground active:inset-ring-1 active:text-foreground active:bg-transparent active:inset-ring-foreground"
                onClick={() => delSpending(s.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spending;
