import { signinAction } from "@/lib/actions";
import { RiGoogleLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="px-4 bg-background  not-dark:text-[#575757]">
      <div className="w-full py-24 px-4  flex flex-col items-center justify-center gap-4">
        <h2>Join us using:</h2>
        <form action={signinAction} className="w-full">
          <button
            type="submit"
            className="w-full py-1 px-2 flex items-center gap-2 inset-ring-1 inset-ring-main cursor-pointer rounded overflow-hidden transition-all duration-300 hover:bg-main/80 hover:shadow-2xl hover:shadow-main hover:inset-ring-0 active:bg-main/80  active:shadow-2xl active:shadow-main active:inset-ring-0 not-dark:hover:text-[#fff]"
          >
            <RiGoogleLine className="text-4xl sm:text-5xl" />
            <p className="text-xl sm:ten decoration-violet-50xt-2xl">
              Sign in with Google
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};
export default page;
