import React from 'react';

const mockPayments = [
  { id: 1, bill: 'BILL001', amount: 45.00, method: 'Cash', date: '2024-06-05' },
  { id: 2, bill: 'BILL002', amount: 38.50, method: 'Card', date: '2024-06-06' },
  { id: 3, bill: 'BILL003', amount: 41.25, method: 'Mobile', date: '2024-06-07' },
];

export default function PaymentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero/Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-100 via-white to-purple-50 shadow">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-purple-200 p-3">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 10h20" /></svg>
          </span>
          <div>
            <h1 className="text-3xl font-extrabold text-purple-700 tracking-tight mb-1">Payments</h1>
            <p className="text-gray-600 text-base">Track and manage all payments. Add new payments and view payment history for each bill.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn bg-purple-600 hover:bg-purple-700 px-6 py-2 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-300"
            style={{ borderRadius: '9999px' }}
          >
            + Add Payment
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="card overflow-x-auto p-0 border border-purple-100">
        <table className="min-w-full text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-purple-50">
              <th className="py-4 px-5 font-semibold text-purple-700 text-base">Bill ID</th>
              <th className="py-4 px-5 font-semibold text-purple-700 text-base">Amount</th>
              <th className="py-4 px-5 font-semibold text-purple-700 text-base">Method</th>
              <th className="py-4 px-5 font-semibold text-purple-700 text-base">Date</th>
            </tr>
          </thead>
          <tbody>
            {mockPayments.map((p) => (
              <tr key={p.id} className="border-b last:border-b-0 hover:bg-purple-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{p.bill}</td>
                <td className="py-4 px-5 text-gray-800 text-base">${p.amount.toFixed(2)}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{p.method}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Placeholder Illustration for empty space on large screens */}
      <div className="hidden lg:flex justify-end mt-8">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#e9d5ff" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#a21caf" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      {/* Floating action button for mobile */}
      <button className="sm:hidden fixed bottom-6 right-6 btn bg-purple-600 hover:bg-purple-700 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg">+</button>
    </div>
  );
} 