const AboutMeSection = () => {
  return (
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
          I&apos;m a web developer who enjoys building practical, well-designed
          applications. I built this Cash Flow Analyzer to explore modern web
          development and create something useful for managing money. I work
          with Next.js, TypeScript, Tailwind CSS, and Supabase, focusing on
          clean design and a smooth user experience.
        </p>
      </div>
    </section>
  );
};
export default AboutMeSection;
