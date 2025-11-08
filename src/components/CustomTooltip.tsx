// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="p-2 flex flex-col gap-4 rounded-md bg-l-black/80 text-foreground not-dark:bg-foreground/80 not-dark:text-background">
        <p className="text-xl">{label}</p>
        <p>
          amount: <span className="text-main">{payload[0]?.value}</span>
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
