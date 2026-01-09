"use client";
import { useForm } from "react-hook-form";
import { saveExpense } from "../utils/storage";

export default function ExpenseForm() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    saveExpense({
      id: Date.now(),
      title: data.title,
      amount: Number(data.amount),
      category: data.category,
    });
    reset();
    alert("Expense added successfully!");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded shadow"
    >
      <input
        {...register("title")}
        placeholder="Expense title"
        className="border p-2 w-full mb-3"
        required
      />

      <input
        {...register("amount")}
        type="number"
        placeholder="Amount"
        className="border p-2 w-full mb-3"
        required
      />

      <select {...register("category")} className="border p-2 w-full mb-3">
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Add Expense
      </button>
    </form>
  );
}
