import React from 'react';

const summary = [
  { label: 'Total Customers', value: 128, color: 'bg-blue-50', accent: 'text-blue-700' },
  { label: 'Total Bills', value: 120, color: 'bg-yellow-50', accent: 'text-yellow-700' },
  { label: 'Total Payments', value: 110, color: 'bg-purple-50', accent: 'text-purple-700' },
];

const details = [
  { id: 1, customer: 'Alice Johnson', bills: 3, payments: 2 },
  { id: 2, customer: 'Bob Smith', bills: 2, payments: 2 },
  { id: 3, customer: 'Carol Lee', bills: 2, payments: 1 },
];

export default function ReportsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero/Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-blue-200 p-3">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </span>
          <div>
            <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight mb-1">Reports</h1>
            <p className="text-gray-600 text-base">View analytics and detailed reports on customers, bills, and payments. Gain insights into your utility system's performance.</p>
          </div>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {summary.map((s) => (
          <div key={s.label} className={`card flex flex-col items-center ${s.color}`} style={{ minHeight: '120px' }}>
            <span className={`text-3xl font-bold mb-2 ${s.accent}`}>{s.value}</span>
            <span className="text-gray-700 mt-1 text-lg font-medium">{s.label}</span>
          </div>
        ))}
      </div>
      {/* Detailed Report Table */}
      <div className="card overflow-x-auto p-0 border border-blue-100">
        <h2 className="text-lg font-bold mb-4 text-blue-600 px-5 pt-5">Detailed Report</h2>
        <table className="min-w-full text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Customer</th>
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Bills</th>
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Payments</th>
            </tr>
          </thead>
          <tbody>
            {details.map((d) => (
              <tr key={d.id} className="border-b last:border-b-0 hover:bg-blue-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{d.customer}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{d.bills}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{d.payments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Placeholder Illustration for empty space on large screens */}
      <div className="hidden lg:flex justify-end mt-8">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#e0e7ff" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#4f8cff" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
    </div>
  );
} 