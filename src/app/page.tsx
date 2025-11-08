import Card from "@/components/Card";
import Link from "next/link";
import { FaMoneyBills } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { BiStats } from "react-icons/bi";
import { FaChartSimple } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="px-6 py-10 w-full bg-background">
        <div className="grid grid-cols-1 items-center justify-items-center gap-8">
          <div className="flex items-center justify-center px-4 py-10 bg-[url(/bg/bg.jpg)] bg-cover rounded-2xl not-dark:invert not-dark:text-background">
            <span className="text-balance text-center text-6xl font-light w-full">
              Cash Flow Analyzer
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl leading-12">
              Turn spending into flow, not friction.
            </h1>
            <p className="text-foreground/60 text-xl">
              A calm, elegant way to track and analyze your spending, understand
              where your money goes, and keep your budget on course.
            </p>
          </div>

          <Link
            href="dashboard"
            className="col-span-full w-full block text-center shadow-2xl shadow-main/30 bg-main text-foreground text-xl font-medium cursor-pointer py-2 rounded-xl transition-all duration-300 hover:bg-transparent hover:inset-ring-1 hover:inset-ring-main active:bg-transparent active:inset-ring-1 active:inset-ring-main md:col-span-full"
          >
            Analyze
          </Link>
        </div>
      </section>

      <section id="feat" className="px-6 py-10 w-full bg-gray/5 ">
        <h2 className="text-2xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <Card
            heading="Budget Overview"
            icon={<FaMoneyBills className="text-2xl text-main" />}
          >
            Keep track of your remaining budget in real time. The app
            continuously calculates what you have left after each expense,
            helping you avoid overspending and giving you a complete picture of
            your finances with minimal effort.
          </Card>
          <Card
            heading="Category Breakdown"
            icon={<BiSolidCategory className="text-2xl text-main" />}
          >
            See exactly where your money goes and which areas dominate your
            spending. Expenses are organized by categories, making it simple to
            spot patterns, plan for the future, and make informed decisions
            about where to cut back or save.
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
            Transform raw numbers into clear, informative visuals. Colorful
            charts and graphs show how your money is distributed across
            categories, reveal trends over time, and make it easy to identify
            where most of your budget goes without digging through lists of
            transactions.
          </Card>
        </div>
      </section>

      <section
        id="aboutme"
        className="px-6 py-10 w-full  bg-[url(/bg/bg-main.jpg)] bg-cover bg-center bg-background bg-blend-exclusion"
      >
        <h2 className="text-2xl font-bold mb-10">About Me</h2>
        <div className="grid grid-cols-1">
          <h3 className="text-3xl leading-10 mb-4 text-foreground/90 font-medium">
            Web Developer Foucsed on Practical Apps
          </h3>
          <p className="text-xl leading-8 text-foreground/80 rounded-2xl">
            I&apos;m a web developer who enjoys building practical,
            well-designed applications. I built this Cash Flow Analyzer to
            explore modern web development and create something useful for
            managing money. I work with Next.js, TypeScript, Tailwind CSS, and
            Supabase, focusing on clean design and a smooth user experience.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Home;
