"use client";
import { Dispatch, SetStateAction, useState } from "react";

import Input from "@/components/Input";
import { MdOutlineAdd } from "react-icons/md";
import InputSpending from "./InputSpending";
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
          <div key={s.id} className="mb-4 bg-l-black p-2 rounded">
            

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
              <Input
                id={`spending-name-${index}`}
                name="Spending name"
                type="text"
              />
              <InputSpending
                id={`spending-amount-${index}`}
                name="Spending"
                type="number"
                value={s.amount}
                handleChange={(e) =>
                  handleAmountChange(s.id, Number(e.target.value))
                }
              />

              <div className="flex flex-col justify-center gap-2">
                <label htmlFor={`category-${index}`} className="font-medium">
                  Category
                </label>
                <select
                  id={`category-${index}`}
                  name="category"
                  className="py-3 px-2 rounded-md bg-lighterblack"
                  defaultValue="entertainment"
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
