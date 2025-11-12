import { ChangeEventHandler } from "react";

interface Props {
  id: string;
  name: string;
  type: string;
  value: number;

  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const InputSpending = ({ id, name, value, handleChange }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={id} className="font-medium">
        {name}
      </label>
      <input
        type="number"
        id={id}
        name={id}
        required
        className={`py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-background/5 ${
          !value ||
          (value <= 0 &&
            "outline-2 -outline-offset-2 outline-inverted-main  focus-within:outline-inverted-main")
        }`}
        onChange={handleChange}
      />
    </div>
  );
};
export default InputSpending;
