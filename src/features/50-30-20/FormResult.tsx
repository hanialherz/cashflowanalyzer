import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";

interface props {
  selectedBudget?: { budget: number };
  needsTotal: number;

  wantsTotal: number;

  savingsTotal: number;
}

const FormResult = ({
  selectedBudget,
  needsTotal,
  wantsTotal,
  savingsTotal,
}: props) => {
  /*Remaining */
  const remaining = selectedBudget
    ? selectedBudget.budget - (needsTotal + wantsTotal + savingsTotal)
    : 0;

  /*Calculation to get the final percentage */
  const needsPercent = selectedBudget
    ? (needsTotal / selectedBudget.budget) * 100
    : 0;
  const wantsPercent = selectedBudget
    ? (wantsTotal / selectedBudget.budget) * 100
    : 0;
  const savingsPercent = selectedBudget
    ? (savingsTotal / selectedBudget.budget) * 100
    : 0;

  const selected = needsPercent > 0 || wantsPercent > 0 || savingsPercent > 0;

  const qualify =
    needsPercent >= 50 &&
    savingsPercent >= 20 &&
    wantsPercent <= 30 &&
    remaining >= 0;

  /*If there is nothing selected no point of rendering anything */
  if (!selected) return null;

  return (
    <section
      role="status"
      aria-live="polite"
      aria-labelledby="form-result-title"
      className={`py-2 pl-8 pr-2 rounded-2xl flex items-center gap-8 ${
        qualify
          ? "bg-main/70 shadow-2xl shadow-main"
          : "bg-inverted-main text-foreground"
      }`}
    >
      {qualify ? (
        <FaCheck className="text-4xl justify-self-center" />
      ) : (
        <FaExclamation className="text-4xl justify-self-center" />
      )}
      <div className="flex flex-col gap-1">
        <p>
          <strong>Needs:</strong> ${needsTotal} ({needsPercent?.toFixed(1)}%)
        </p>
        <p>
          <strong>Wants:</strong> ${wantsTotal} ({wantsPercent?.toFixed(1)}%)
        </p>
        <p>
          <strong>Savings:</strong> ${savingsTotal} (
          {savingsPercent?.toFixed(1)}
          %)
        </p>
        <p className={`${remaining < 0 && "underline underline-offset-1"}`}>
          <strong>Remaining:</strong> ${remaining}
        </p>
      </div>
    </section>
  );
};

export default FormResult;
