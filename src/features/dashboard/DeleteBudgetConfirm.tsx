"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

interface props {
  budgetName: string;
}

const DeleteBudgetConfirm = ({ budgetName }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
        Delete
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/60 not-dark:bg-black/20" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-l-black text-foreground rounded-2xl p-6 not-dark:bg-[#F2F3F4] not-dark:text-[#808080]">
            <DialogTitle className="font-bold not-dark:text-[#5c5c5c]">
              Delete budget ({budgetName})
            </DialogTitle>
            <Description>This will permanently delete the budget</Description>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button
                className="px-4 shadow-2xl shadow-main/30 bg-inverted-main text-foreground text-xl font-medium cursor-pointer py-2 rounded-xl transition-all duration-300 hover:bg-transparent hover:inset-ring-1 hover:inset-ring-inverted-main active:bg-transparent active:inset-ring-1 active:inset-ring-inverted-main not-dark:text-white not-dark:hover:text-[#5c5c5c] not-dark:active:text-[#5c5c5c] md:col-span-full"
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteBudgetConfirm;
