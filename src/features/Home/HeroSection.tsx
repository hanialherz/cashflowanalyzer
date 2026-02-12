import Link from "next/link";

const HeroSection = () => {
  return (
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
          <p className="text-foreground/60 text-xl not-dark:text-light-text">
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
  );
};
export default HeroSection;
