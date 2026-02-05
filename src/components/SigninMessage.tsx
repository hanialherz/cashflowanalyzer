import Link from "next/link";

const SigninMessage = () => {
  return (
    <div className="h-80 bg-[url(/bg/red.jpg)] bg-cover bg-blend-color-dodge flex flex-col items-center justify-evenly gap-4">
      <p className="text-2xl text-foreground/80 bg-background/80">
        Please, signin to see this page
      </p>
      <Link
        href="/signin"
        className="px-6 text-foreground text-xl font-medium cursor-pointer py-1 rounded transition-all duration-300 hover:bg-background/60 active:bg-transparent"
      >
        Signin
      </Link>
    </div>
  );
};
export default SigninMessage;
