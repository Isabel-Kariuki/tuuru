import React from 'react';

const mockCustomers = [
  { id: 1, name: 'Alice Johnson', meter: 'MTR001', phone: '555-1234', address: '123 Main St' },
  { id: 2, name: 'Bob Smith', meter: 'MTR002', phone: '555-5678', address: '456 Oak Ave' },
  { id: 3, name: 'Carol Lee', meter: 'MTR003', phone: '555-9012', address: '789 Pine Rd' },
];

export default function CustomersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero/Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-blue-200 p-3">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
          </span>
          <div>
            <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight mb-1">Customers</h1>
            <p className="text-gray-600 text-base">Manage all your customers in one place. Add, view, and update customer information easily.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="btn bg-blue-600 hover:bg-blue-700 px-6 py-2 text-lg font-semibold shadow-lg transition-transform hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{ borderRadius: '9999px' }}
          >
            + Add Customer
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="card overflow-x-auto p-0 border border-blue-100">
        <table className="min-w-full text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Name</th>
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Meter #</th>
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Phone</th>
              <th className="py-4 px-5 font-semibold text-blue-700 text-base">Address</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((c) => (
              <tr key={c.id} className="border-b last:border-b-0 hover:bg-blue-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{c.name}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{c.meter}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{c.phone}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{c.address}</td>
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
      {/* Floating action button for mobile */}
      <button className="sm:hidden fixed bottom-6 right-6 btn bg-blue-600 hover:bg-blue-700 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg">+</button>
    </div>
  );
} 