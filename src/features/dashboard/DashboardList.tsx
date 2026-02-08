"use client";
import { useState } from "react";
import DashboardItem from "./DashboardItem";

interface props {
  budgetData: {
    id: number;
    name: string;
    budget: number;
    spendings: {
      id: number;
      name: string;
      category: string;
      amount: number;
    }[];
  }[];
}

const DashboardList = ({ budgetData }: props) => {
  const [isOpen, setIsOpen] = useState<number | undefined>(undefined);

  const toggleOpen = (i: number) => {
    console.log(isOpen);

    if (isOpen == i) {
      return setIsOpen(undefined);
    }
    return setIsOpen(i);
  };
  return (
    <div>
      <ul
        className={`grid grid-cols-1 gap-4 h-92 sm:grid-cols-2 ${isOpen ? "overflow-y-hidden touch-none" : "overflow-y-auto touch-auto"}`}
      >
        {budgetData.map((i) => (
          <DashboardItem
            key={i.id}
            id={i.id}
            name={i.name}
            budget={i.budget}
            isOpen={isOpen}
            toggleOpen={toggleOpen}
          />
        ))}
      </ul>
    </div>
  );
};
export default DashboardList;
