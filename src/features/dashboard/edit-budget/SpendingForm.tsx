interface SpendingItem {
  id: number;
  name: string;
  amount: number;
  category: string;
}
interface props
{
   items:SpendingItem;
   delSpending:(id: number) => void;
}


const SpendingForm =({items,delSpending}:props)=>{
  
  
  return <div className="flex flex-col gap-4"><div className="flex flex-col gap-2">
      <label htmlFor="spending-name" className="font-medium">
        Name
      </label>


      
        <input
          type="text"
          id="spending-name"
          name="spending-name"
          defaultValue={items.name}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0] "
        />

    </div>
    
    
    <div className="flex flex-col gap-2 ">
      <label htmlFor="spending-amount" className="font-medium">
        Amount
      </label>


      
        <input
          type="number"
          id="spending-amount"
          name="spending-amount"
          defaultValue={items.amount}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-[#F0F0F0] "
        />

    </div>

    <div className="flex flex-col gap-2 ">
      <label htmlFor="spending-category" className="font-medium">
        Category {items.category}
      </label>


<select id="spending-category"
          name="spending-category"
          
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
    
}
export default SpendingForm;