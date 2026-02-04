import { auth } from "@/lib/auth";
import ClientSection from "../features/header/ClientSection";

const Header = async () => {
  const session = await auth();
  return (
    <header className="bg-background">
      <ClientSection session={session} />
    </header>
  );
};
export default Header;
