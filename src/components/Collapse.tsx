import * as React from 'react';
import { Collapsible } from '@base-ui/react/collapsible';

interface SpendingItem {
  id: number;
  name: string;
  amount: number;
  category: string;
}
interface props
{
   items:SpendingItem;
   index:number;
   
   delSpending:(id: number) => void;
}

const Collapse=({items,index,delSpending}:props)=> {
  return (
    <Collapsible.Root className="flex flex-col justify-center mb-2 py-2">
      <Collapsible.Trigger className="group flex items-center gap-2 rounded-xs px-2 py-2 font-semibold hover:bg-l-black focus-visible:outline-2 active:bg-l-black not-dark:hover:bg-gray/5 not-dark:active:bg-gray/5">
        <ChevronIcon className="size-3 transition-all ease-out group-data-[panel-open]:rotate-90" />
        {(index+1)+" "+items.name}
      </Collapsible.Trigger>
      <Collapsible.Panel className="flex [&[hidden]:not([hidden='until-found'])]:hidden h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 duration-150">
        <div className="flex cursor-text flex-col gap-2 rounded-xs py-2 px-8">
          <div className={`flex flex-col gap-4`}>
    
    <div className="flex flex-col gap-2">
      <label htmlFor={`spending-name-${index}`} className="font-medium">
        Name 
      </label>


      
        <input
          type="text"
          id={`spending-name-${index}`}
          name={`spending-name-${index}`}
          defaultValue={items.name}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0] "
        />

    </div>
    
    
    <div className="flex flex-col gap-2 ">
      <label htmlFor={`spending-amount-${index}`} className="font-medium">
        Amount
      </label>


      
        <input
          type="number"
          id={`spending-amount-${index}`}
          name={`spending-amount-${index}`}
          defaultValue={items.amount}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0] "
        />

    </div>

    <div className="flex flex-col gap-2 ">
      <label htmlFor={`spending-category-${index}`} className="font-medium">
        Category {items.category}
      </label>


<select id={`spending-category-${index}`}
          name={`spending-category-${index}`}
          
          defaultValue={items.category}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0]">
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
                onClick={() => delSpending(items.id)}
              >
                Delete
              </button>


    </div>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
export default Collapse;

export function ChevronIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
    </svg>
  );
}
