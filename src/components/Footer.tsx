import FooterCol from "./FooterCol";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background py-6 px-6 sticky">
      <div className="grid grid-cols-2 justify-items-start items-start mb-6">
        <FooterCol heading="Sitemap">
          <ul className="flex flex-col gap-2 text-gray">
            <li>
              <Link
                href="/"
                className="transition-all duration-300 hover:text-main active:text-main"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="transition-all duration-300 hover:text-main active:text-main"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/50-30-20"
                className="transition-all duration-300 hover:text-main active:text-main"
              >
                50-30-20
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="transition-all duration-300 hover:text-main active:text-main"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </FooterCol>

        <FooterCol heading="Contact">
          <ul className="flex flex-col gap-2 text-gray">
            <li>
              <address className="not-italic">
                <a
                  href="mailto:hanialherz1@gmail.com"
                  className="transition-all duration-300 hover:text-main active:text-main"
                >
                  Email me
                </a>
              </address>
            </li>
          </ul>
        </FooterCol>
      </div>
      <p className="text-main/40 text-center">Copyright &copy; Hani AL-Herz</p>
    </footer>
  );
};
export default Footer;
