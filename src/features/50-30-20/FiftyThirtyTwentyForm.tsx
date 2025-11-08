"use client";
import { useState } from "react";
import FormResult from "./FormResult";
import FormCheckbox from "./FormCheckbox";
import { useRouter, useSearchParams } from "next/navigation";

interface Spending {
  id: number;
  name: string;
  category: string;
  amount: number;
}

interface Budget {
  id: number;
  name: string;
  budget: number;
  spendings: Spending[];
}

interface Props {
  data: Budget[];
}

const FiftyThirtyTwentyForm = ({ data }: Props) => {
  /*If u came from the analyze page it will take the id from there and preselect the budget otherwise it will select nothing */
  const searchParams = useSearchParams();
  const idParam = Number(searchParams.get("id"));

  /*This to control the url */
  const router = useRouter();

  const [budgetValue, setBudgetValue] = useState<number | undefined>(idParam);

  /* When u select a budget replace the id in the url with another one without reloading */
  const handleChange = (value: number) => {
    setBudgetValue(value);
    router.replace(`?id=${value}`);
  };

  /*When a budget gets selected get its id and fetch all the data */
  const selectedBudget = data.find((b) => b.id === budgetValue);

  const [needsSelected, setNeedsSelected] = useState<number[]>([]);
  const [wantsSelected, setWantsSelected] = useState<number[]>([]);
  const [savingsSelected, setSavingsSelected] = useState<number[]>([]);

  const handleCheck = (
    id: number,
    checked: boolean,
    type: "needs" | "wants" | "savings"
  ) => {
    const setter =
      type === "needs"
        ? setNeedsSelected
        : type === "wants"
        ? setWantsSelected
        : setSavingsSelected;

    setter((prev) => (checked ? [...prev, id] : prev.filter((i) => i !== id)));
  };

  /* it will fetch calculate the full amount*/
  const calculateTotal = (ids: number[]) => {
    if (!selectedBudget) return 0;
    return selectedBudget.spendings
      .filter((s) => ids.includes(s.id))
      .reduce((sum, s) => sum + s.amount, 0);
  };

  const needsTotal = calculateTotal(needsSelected);
  const wantsTotal = calculateTotal(wantsSelected);
  const savingsTotal = calculateTotal(savingsSelected);

  return (
    <div className="mb-6">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="budgetID" className="font-medium">
            Budget
          </label>
          <select
            id="budgetID"
            name="budget"
            className="py-1.5 pl-2 rounded-md bg-bg-shade not-dark:bg-gray/10"
            defaultValue={budgetValue}
            onChange={(e) => handleChange(Number(e.target.value))}
          >
            <option value="">Select a budget</option>
            {data.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} - ${b.budget}
              </option>
            ))}
          </select>
        </div>

        {selectedBudget?.budget && selectedBudget?.spendings?.length ? (
          <>
            <FormCheckbox
              selectedBudget={selectedBudget}
              itemSelected={needsSelected}
              handleCheck={handleCheck}
              text="Select needs:"
              type="needs"
            />
            <FormCheckbox
              selectedBudget={selectedBudget}
              itemSelected={wantsSelected}
              handleCheck={handleCheck}
              text="Select wants:"
              type="wants"
            />
            <FormCheckbox
              selectedBudget={selectedBudget}
              itemSelected={savingsSelected}
              handleCheck={handleCheck}
              text="Select savings:"
              type="savings"
            />

            <FormResult
              selectedBudget={selectedBudget}
              needsTotal={needsTotal}
              wantsTotal={wantsTotal}
              savingsTotal={savingsTotal}
            />
          </>
        ) : (
          <p>There is no budget or spendings yet</p>
        )}
      </form>
    </div>
  );
};

export default FiftyThirtyTwentyForm;
