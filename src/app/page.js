import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">AI Smart Expense Tracker</h1>
      <p className="text-gray-600 mb-6">
        Track your expenses and get AI-powered saving tips
      </p>

      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
