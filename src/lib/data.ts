const budgetData = [
  {
    id: 1,
    name: "Uni",
    budget: 3000,
    spendings: [
      { id: 1, name: "Rent", category: "Housing", amount: 1000 },
      { id: 2, name: "Books", category: "Education", amount: 200 },
      { id: 3, name: "Coffee", category: "Food & Drinks", amount: 50 },
      { id: 4, name: "Groceries", category: "Food & Drinks", amount: 300 },
      { id: 5, name: "Transport", category: "Transportation", amount: 100 },
      { id: 6, name: "Gym", category: "Health", amount: 50 },
      { id: 7, name: "Netflix", category: "Entertainment", amount: 20 },
      { id: 8, name: "Supplies", category: "Education", amount: 80 },
    ],
  },
  {
    id: 2,
    name: "Food",
    budget: 1000,
    spendings: [
      { id: 1, name: "Lunch", category: "Food & Drinks", amount: 150 },
      { id: 2, name: "Coffee", category: "Food & Drinks", amount: 30 },
    ],
  },
  {
    id: 3,
    name: "Music prod",
    budget: 1000,
    spendings: [
      { id: 1, name: "Xpand!2", category: "Entertainment", amount: 150 },
      { id: 2, name: "Portal", category: "Entertainment", amount: 150 },
    ],
  },
  {
    id: 4,
    name: "Grunge",
    budget: 1,
    spendings: [
      { id: 1, name: "Electric guitar", category: "Entertainment", amount: 10 },
    ],
  },
  {
    id: 5,
    name: "nullable",
    budget: 0,
    spendings: [],
  },
];

// fetch all budgets
export const getBudgetData = async () => {
  return new Promise<typeof budgetData>((resolve) => {
    setTimeout(() => resolve([...budgetData]), 200); // return a copy
  });
};

// fetch budget by ID
export const getBudgetDataById = async (id: number) => {
  return new Promise<(typeof budgetData)[0] | undefined>((resolve) => {
    setTimeout(() => {
      const item = budgetData.find((d) => d.id === id);
      resolve(item ? { ...item } : undefined); // return a copy
    }, 200);
  });
};
