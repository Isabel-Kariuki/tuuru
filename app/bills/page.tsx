import React from 'react';

const mockBills = [
  { id: 1, customer: 'Alice Johnson', amount: 45.00, due: '2024-06-10', status: 'Unpaid' },
  { id: 2, customer: 'Bob Smith', amount: 38.50, due: '2024-06-10', status: 'Paid' },
  { id: 3, customer: 'Carol Lee', amount: 41.25, due: '2024-06-10', status: 'Unpaid' },
];

export default function BillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero/Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-yellow-200 p-3">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
          </span>
          <div>
            <h1 className="text-3xl font-extrabold text-yellow-700 tracking-tight mb-1">Bills</h1>
            <p className="text-gray-600 text-base">View, generate, and manage all customer bills. Track payment status and due dates easily.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 px-6 py-2 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            style={{ borderRadius: '9999px' }}
          >
            + Generate Bill
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="card overflow-x-auto p-0 border border-yellow-100">
        <table className="min-w-full text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-yellow-50">
              <th className="py-4 px-5 font-semibold text-yellow-700 text-base">Customer</th>
              <th className="py-4 px-5 font-semibold text-yellow-700 text-base">Amount</th>
              <th className="py-4 px-5 font-semibold text-yellow-700 text-base">Due Date</th>
              <th className="py-4 px-5 font-semibold text-yellow-700 text-base">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockBills.map((b) => (
              <tr key={b.id} className="border-b last:border-b-0 hover:bg-yellow-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{b.customer}</td>
                <td className="py-4 px-5 text-gray-800 text-base">${b.amount.toFixed(2)}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{b.due}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${b.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{b.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Placeholder Illustration for empty space on large screens */}
      <div className="hidden lg:flex justify-end mt-8">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#fef9c3" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#facc15" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      {/* Floating action button for mobile */}
      <button className="sm:hidden fixed bottom-6 right-6 btn bg-yellow-500 hover:bg-yellow-600 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg">+</button>
    </div>
  );
} 