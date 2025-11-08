interface Props {
  id: string;
  name: string;
  type: string;
  inputAmount?: number;

  getsetbudget?: (value: string) => void;
}

const Input = ({ id, name, type, inputAmount, getsetbudget }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={id} className="font-medium">
        {name}
      </label>

      {type == "number" && (
        <input
          type="number"
          id={id}
          name={id}
          required
          className={`py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-background/5 ${
            !inputAmount ||
            inputAmount == 0 ||
            (inputAmount < 0 &&
              "outline-2 -outline-offset-2 outline-inverted-main  focus-within:outline-inverted-main")
          }`}
          onChange={(e) => getsetbudget && getsetbudget(e.target.value)}
        />
      )}

      {type != "number" && (
        <input
          type={type}
          id={id}
          name={id}
          required
          className="py-2 px-2 rounded-md bg-lighterblack  focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-main not-dark:bg-background/5"
        />
      )}
    </div>
  );
};
export default Input;
