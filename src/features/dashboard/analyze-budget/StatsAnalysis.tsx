import StatsAnalysisCard from "./StatsAnalysisCard";

interface props {
  spendings: { id: number; name: string; category: string; amount: number }[];
}
const StatsAnalysis = ({ spendings }: props) => {
  return (
    <div className="flex flex-col gap-8 mb-20">
      <div className="bg-l-black p-4 rounded-md flex flex-col gap-2">
        <p className="text-2xl">Money</p>
        <div>
          <p className="text-xl">1000$</p>
          <p>Remaining: 10$</p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch justify-items-center gap-4 sm:grid-cols-4 sm:self-start">
        <StatsAnalysisCard
          title="Number of spendings"
          amount={spendings.length}
        />
        <StatsAnalysisCard title="Highest spending" amount={spendings.length} />
        <StatsAnalysisCard title="Highest category" amount={spendings.length} />
        <StatsAnalysisCard title="Avg day spending" amount={300} />
      </div>
    </div>
  );
};
export default StatsAnalysis;
