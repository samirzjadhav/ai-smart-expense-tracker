"use client";

import ExpenseForm from "../../components/ExpenseForm";

export default function AddExpensePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add New Expense</h2>
      <ExpenseForm />
    </div>
  );
}
