import ChartOne from "@/features/dashboard/analyze-budget/ChartOne";
import ChartTwo from "@/features/dashboard/analyze-budget/ChartTwo";
import StatsAnalysis from "@/features/dashboard/analyze-budget/StatsAnalysis";
import { getBudgetDataById } from "@/lib/data";
import Link from "next/link";

interface AnalyzePageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: AnalyzePageProps) => {
  const { id } = await params;
  const data = await getBudgetDataById(Number(id));
  return (
    <div className="px-6 py-4">
      {data ? (
        <>
          <StatsAnalysis spendings={data?.spendings ?? []} />

          <div className="grid grid-cols-1 items-center justify-items-center gap-y-10 mb-20 md:grid-cols-2">
            <ChartTwo spendings={data?.spendings ?? []} />
            <ChartOne spendings={data?.spendings ?? []} />
          </div>

          <p className="text-foreground/60">
            <strong>Tip:</strong> To manage your spending habits, you can use
            the 50/30/20 method. 50% for needs, 30% for wants, 20% for savings.{" "}
            <Link
              href={`/50-30-20?id=${data.id}`}
              className="text-main transition-all duration-300 hover:underline active:underline"
            >
              Try it!
            </Link>
          </p>
        </>
      ) : (
        <p className="text-center">No Data</p>
      )}
    </div>
  );
};
export default page;
