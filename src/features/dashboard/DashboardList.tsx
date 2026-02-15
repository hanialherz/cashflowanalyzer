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
  return (
    <div>
      <ul
        className={`grid grid-cols-1 gap-4 h-92 overflow-y-auto sm:grid-cols-2`}
      >
        {budgetData.map((i) => (
          <DashboardItem
            key={i.id}
            id={i.id}
            name={i.name}
            budget={i.budget}
            
          />
        ))}
      </ul>
    </div>
  );
};
export default DashboardList;
