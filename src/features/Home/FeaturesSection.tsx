import Card from "@/components/Card";
import { BiSolidCategory, BiStats } from "react-icons/bi";
import { FaChartSimple, FaMoneyBills } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section id="feat" className="px-6 py-10 w-full bg-gray/5 ">
      <h2 className="text-2xl font-bold mb-10">Features</h2>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <Card
          heading="Budget Overview"
          icon={<FaMoneyBills className="text-2xl text-main" />}
        >
          Keep track of your remaining budget in real time. The app continuously
          calculates what you have left after each expense, helping you avoid
          overspending and giving you a complete picture of your finances with
          minimal effort.
        </Card>
        <Card
          heading="Category Breakdown"
          icon={<BiSolidCategory className="text-2xl text-main" />}
        >
          See exactly where your money goes and which areas dominate your
          spending. Expenses are organized by categories, making it simple to
          spot patterns, plan for the future, and make informed decisions about
          where to cut back or save.
        </Card>
        <Card
          heading="Spending Status"
          icon={<BiStats className="text-2xl text-main" />}
        >
          Instantly understand your financial flow at a glance. Whether
          you&apos;re in a Breezy Flow with plenty left, a Steady Flow with a
          balanced budget, or an Overflow when you&apos;ve overspent, the app
          gives you clear and immediate feedback on your current situation.
        </Card>
        <Card
          heading="Visual Analytics"
          icon={<FaChartSimple className="text-2xl text-main" />}
        >
          Transform raw numbers into clear, informative visuals. Colorful charts
          and graphs show how your money is distributed across categories,
          reveal trends over time, and make it easy to identify where most of
          your budget goes without digging through lists of transactions.
        </Card>
      </div>
    </section>
  );
};
export default FeaturesSection;
