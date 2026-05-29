import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";



interface props
{

register:UseFormRegister<formInputs>;
watch:UseFormWatch<formInputs>;
errors:FieldErrors<formInputs>;

}

type formInputs=
{
  id:number;
budgetName:string
budgetAmount:number
spendings:{id: number;name: string; category: string; amount: number; }[];

}

const Budget=({register,watch}:props)=>{
  
  
  
  return <div className="flex flex-col gap-2 mb-6">

<div className="flex flex-col gap-2 ">
      <label htmlFor="budget-name" className="font-medium">
        Budget name
      </label>


      
        <input
          type="text"
          id="budget-name"
          {...register("budgetName",{required:true})}
          
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0] "
        />

    </div>

        

        

        <div className="flex flex-col gap-2 ">
      <label htmlFor="budget" className="font-medium">
        Budget
      </label>
      <input
        type="number"
        id="budget-amount"
        {...register("budgetAmount",{required:true})}
        
        
        className={`py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#f0f0f0] ${
          !watch("budgetAmount") ||
          (watch("budgetAmount") <= 0 &&
            "outline-2 -outline-offset-2 outline-inverted-main  focus-within:outline-inverted-main")
        }`}
        
      />
    </div>
      </div>}
export default Budget;