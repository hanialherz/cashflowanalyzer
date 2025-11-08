interface spending {
  id: number;
  name: string;
  category?: string;
  amount: number;
}

interface budget {
  spendings: spending[];
}

interface props {
  selectedBudget?: budget;
  itemSelected: number[]; // array of spending IDs
  text: string;
  type: "needs" | "wants" | "savings"; // make it literal type
  handleCheck: (
    id: number,
    checked: boolean,
    type: "needs" | "wants" | "savings"
  ) => void;
}

const FormCheckbox = ({
  selectedBudget,
  itemSelected,
  handleCheck,
  text,
  type,
}: props) => {
  return (
    <div className="flex flex-col gap-2 bg-l-black p-4 rounded-2xl">
      <p>{text}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {selectedBudget?.spendings.map((sp) => (
          <label key={sp.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={sp.id}
              checked={itemSelected.includes(sp.id)}
              onChange={(e) => handleCheck(sp.id, e.target.checked, type)}
            />
            {sp.name} - ${sp.amount}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FormCheckbox;
