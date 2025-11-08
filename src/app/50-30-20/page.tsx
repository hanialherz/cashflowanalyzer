import FiftyThirtyTwentyForm from "@/features/50-30-20/FiftyThirtyTwentyForm";
import FormNotice from "@/features/50-30-20/FormNotice";
import { getBudgetData } from "@/lib/data";
import Link from "next/link";

const page = async () => {
  const data = await getBudgetData();

  return (
    <div className="p-6 ">
      {data ? (
        <FiftyThirtyTwentyForm data={data} />
      ) : (
        <div className="mb-6">
          <p>
            No data, start by{" "}
            <Link href="/dashboard/add-budget" className="text-main">
              Adding a new budget
            </Link>
          </p>
        </div>
      )}

      <FormNotice />
    </div>
  );
};
export default page;
