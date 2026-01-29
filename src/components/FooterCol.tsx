import { ReactNode } from "react";

interface FooterProps {
  heading: string;
  children: ReactNode;
}

const FooterCol = ({ heading, children }: FooterProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="text-xl font-medium mb-2">{heading}</h2>
      {children}
    </div>
  );
};
export default FooterCol;
