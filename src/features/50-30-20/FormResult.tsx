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
      className={`py-2 px-12 rounded-2xl flex items-center gap-12 not-dark:text-white ${
        qualify
          ? "bg-main/70 shadow-2xl shadow-main not-dark:text-gray"
          : "bg-inverted-main"
      }`}
    >
      {qualify ? (
        <FaCheck className="text-4xl" />
      ) : (
        <FaExclamation className="text-4xl" />
      )}

      {/* className="w-full flex flex-col items-start justify-center  gap-4 sm:flex-row sm:justify-between sm:py-6" */}
      <div className="w-full grid grid-cols-1 gap-y-2 items-start justify-items-start min-[460px]:grid-cols-2  sm:grid-cols-4">
        <p className="flex flex-col gap-1">
          <strong>Needs:</strong> <span>${needsTotal}</span>
          <span>({needsPercent?.toFixed(1)}%)</span>
        </p>
        <p className="flex flex-col gap-1">
          <strong>Wants:</strong> <span>${wantsTotal}</span>
          <span>({wantsPercent?.toFixed(1)}%)</span>
        </p>
        <p className="flex flex-col gap-1">
          <strong>Savings:</strong> <span>${savingsTotal}</span>
          <span>
            ({savingsPercent?.toFixed(1)}
            %)
          </span>
        </p>
        <p
          className={`flex flex-col gap-1 ${remaining < 0 && "underline underline-offset-1"}`}
        >
          <strong>Remaining:</strong> ${remaining}
        </p>
      </div>
    </section>
  );
};

export default FormResult;
