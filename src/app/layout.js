import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AI Smart Expense Tracker",
  description: "Track expenses and get AI-powered saving tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <Link href="/" className="font-bold text-lg">
            AI Expense Tracker
          </Link>
          <div className="space-x-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/add-expense">Add Expense</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
