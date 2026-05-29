
import toast from "react-hot-toast";
import { useEffect } from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import {  UseFormWatch } from "react-hook-form";

interface props
{
  watch:UseFormWatch<formInputs>;
}

type formInputs=
{
  id:number;
budgetName:string
budgetAmount:number
spendings:{id: number;name: string; category: string; amount: number; }[];

}


 const NotificationValidation=({watch}:props)=>{ 
  


  /* When the spendings go over the budget show a notification */
   
  useEffect(() => {


    const allspendings = watch("spendings").reduce((sum, s) => sum + s.amount, 0); 
    const result = watch("budgetAmount") - allspendings;

    console.log(allspendings+"\n"+result);
    

    if(watch("budgetAmount")<0){toast.custom(
      <div className="p-4 bg-[#413f41]/80 text-foreground rounded-xl flex items-center gap-2 not-dark:bg-[#f0f0f0] not-dark:text-[#575757]">
        <PiWarningCircleLight className="text-3xl text-inverted-main" />
        <p>Budget cannot be negative</p>
      </div>,
      { id: "negative-budget", duration: Infinity }
    );
  
  }else if (result < 0) {
    toast.custom(
      <div className="p-4 bg-[#413f41]/80 text-foreground rounded-xl flex items-center gap-2 not-dark:bg-[#f0f0f0] not-dark:text-[#575757]">
        <PiWarningCircleLight className="text-3xl text-main" />
        <p>You went over the budget</p>
      </div>,
      { id: "over-budget", duration: Infinity }
    );

  } else {
    toast.dismissAll();
  }

// Cleanup on unmount
  return () => toast.dismissAll();

  }, [watch("budgetAmount"),watch("spendings")]);

  //  to make it clear this is not react component
  return null;

}
export default NotificationValidation;