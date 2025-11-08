import { ReactNode } from "react";

interface CardProps {
  heading: string;
  icon: ReactNode;
  children: string;
}

const Card = ({ heading, icon, children }: CardProps) => {
  return (
    <div className="py-4  flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center">{icon}</span>
        <h3 className="text-xl text-foreground font-medium">{heading}</h3>
      </div>

      <p className="text-[#AAB1B5] bg-bg-shade p-4 leading-7 rounded-2xl">
        {children}
      </p>
    </div>
  );
};

export default Card;
