interface props {
  title: string;
  amount: number;
}

const StatsAnalysisCard = ({ title, amount }: props) => {
  return (
    <div className="w-full py-2 text-center rounded-md inset-ring-1 inset-ring-main/60 flex flex-col justify-between gap-2 sm:w-30">
      <h3 className="w-full">{title}</h3>
      <p className="w-full">{amount}</p>
    </div>
  );
};
export default StatsAnalysisCard;
