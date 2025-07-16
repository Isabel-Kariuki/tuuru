import React from 'react';

const mockReadings = [
  { id: 1, customer: 'Alice Johnson', reading: 120, date: '2024-06-01' },
  { id: 2, customer: 'Bob Smith', reading: 98, date: '2024-06-01' },
  { id: 3, customer: 'Carol Lee', reading: 110, date: '2024-06-01' },
];

export default function MeterReadingsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero/Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-green-100 via-white to-green-50 shadow">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-green-200 p-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" /><circle cx="12" cy="11" r="3" /></svg>
          </span>
          <div>
            <h1 className="text-3xl font-extrabold text-green-700 tracking-tight mb-1">Meter Readings</h1>
            <p className="text-gray-600 text-base">View and manage all meter readings. Add new readings and keep your records up to date.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn bg-green-600 hover:bg-green-700 px-6 py-2 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
            style={{ borderRadius: '9999px' }}
          >
            + Add Reading
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="card overflow-x-auto p-0 border border-green-100">
        <table className="min-w-full text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-green-50">
              <th className="py-4 px-5 font-semibold text-green-700 text-base">Customer</th>
              <th className="py-4 px-5 font-semibold text-green-700 text-base">Reading</th>
              <th className="py-4 px-5 font-semibold text-green-700 text-base">Date</th>
            </tr>
          </thead>
          <tbody>
            {mockReadings.map((r) => (
              <tr key={r.id} className="border-b last:border-b-0 hover:bg-green-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{r.customer}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{r.reading}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Placeholder Illustration for empty space on large screens */}
      <div className="hidden lg:flex justify-end mt-8">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#bbf7d0" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#22c55e" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      {/* Floating action button for mobile */}
      <button className="sm:hidden fixed bottom-6 right-6 btn bg-green-600 hover:bg-green-700 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg">+</button>
    </div>
  );
} 