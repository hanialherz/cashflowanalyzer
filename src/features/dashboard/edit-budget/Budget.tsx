interface props
{data:{ id: number; name: string; budget: number; spendings: { id: number; name: string; category: string; amount: number; }[]; } | undefined;

inputBudget:number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
getsetbudget:(e: any) => void;
}

const Budget=({data,inputBudget,getsetbudget}:props)=>{return <div className="flex flex-col gap-2 mb-6">

<div className="flex flex-col gap-2 ">
      <label htmlFor="budget-name" className="font-medium">
        Budget name
      </label>


      
        <input
          type="text"
          id="budget-name"
          name="budget-name"
          defaultValue={data?.name}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0] "
        />

    </div>

        

        

        <div className="flex flex-col gap-2 ">
      <label htmlFor="budget" className="font-medium">
        Budget
      </label>
      <input
        type="number"
        id="budget"
        name="Budget"
        defaultValue={data?.budget}
        required
        className={`py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#f0f0f0] ${
          !inputBudget ||
          (inputBudget <= 0 &&
            "outline-2 -outline-offset-2 outline-inverted-main  focus-within:outline-inverted-main")
        }`}
        onChange={getsetbudget}
      />
    </div>
      </div>}
export default Budget;