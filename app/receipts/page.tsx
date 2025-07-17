"use client";

import React, { useState } from 'react';

const mockReceipts = [
  { id: 'RCPT001', customer: 'Alice Johnson', amount: 45.00, date: '2024-06-05' },
  { id: 'RCPT002', customer: 'Bob Smith', amount: 38.50, date: '2024-06-06' },
  { id: 'RCPT003', customer: 'Carol Lee', amount: 41.25, date: '2024-06-07' },
];

const mockCustomers = ['Alice Johnson', 'Bob Smith', 'Carol Lee', 'David Wilson', 'Eva Brown'];

export default function ReceiptsPage() {
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [receipts, setReceipts] = useState(mockReceipts);
  const [selectedReceipt, setSelectedReceipt] = useState<string | null>(null);
  const [newReceipt, setNewReceipt] = useState({
    customer: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleGenerateReceipt = () => {
    if (newReceipt.customer && newReceipt.amount && newReceipt.date) {
      const receipt = {
        id: `RCPT${String(receipts.length + 1).padStart(3, '0')}`,
        customer: newReceipt.customer,
        amount: parseFloat(newReceipt.amount),
        date: newReceipt.date
      };
      setReceipts([...receipts, receipt]);
      setNewReceipt({ customer: '', amount: '', date: new Date().toISOString().split('T')[0] });
      setShowGenerateModal(false);
    }
  };

  const handleDownloadReceipt = (receiptId: string) => {
    setSelectedReceipt(receiptId);
    // Simulate download - in real app, this would generate and download a PDF
    setTimeout(() => {
      alert(`Receipt ${receiptId} downloaded successfully!`);
      setSelectedReceipt(null);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero/Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-100 via-white to-indigo-50 shadow">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-indigo-200 p-3">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
          </span>
          <div>
            <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight mb-1">Receipts</h1>
            <p className="text-gray-600 text-base">View and manage all payment receipts. Download or print receipts for your records.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGenerateModal(true)}
            className="btn bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex items-center gap-2"
            style={{ borderRadius: '9999px' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Generate Receipt
          </button>
        </div>
      </div>
      
      {/* Table Section */}
      <div className="card overflow-x-auto p-0 border border-indigo-100">
        <table className="min-w-full text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-indigo-50">
              <th className="py-4 px-5 font-semibold text-indigo-700 text-base">Receipt ID</th>
              <th className="py-4 px-5 font-semibold text-indigo-700 text-base">Customer</th>
              <th className="py-4 px-5 font-semibold text-indigo-700 text-base">Amount</th>
              <th className="py-4 px-5 font-semibold text-indigo-700 text-base">Date</th>
              <th className="py-4 px-5 font-semibold text-indigo-700 text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((r) => (
              <tr key={r.id} className="border-b last:border-b-0 hover:bg-indigo-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{r.id}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{r.customer}</td>
                <td className="py-4 px-5 text-gray-800 text-base">${r.amount.toFixed(2)}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{r.date}</td>
                <td className="py-4 px-5">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownloadReceipt(r.id)}
                      disabled={selectedReceipt === r.id}
                      className={`text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                        selectedReceipt === r.id ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {selectedReceipt === r.id ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download
                        </>
                      )}
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                      Print
                    </button>
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200">
                      Email
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Placeholder Illustration for empty space on large screens */}
      <div className="hidden lg:flex justify-end mt-8">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#c7d2fe" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#6366f1" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      
      {/* Floating action button for mobile */}
      <button 
        onClick={() => setShowGenerateModal(true)}
        className="sm:hidden fixed bottom-6 right-6 btn bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg rounded-full transition-all duration-300 hover:scale-110"
      >
        +
      </button>

      {/* Generate Receipt Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Generate New Receipt</h2>
              <button
                onClick={() => setShowGenerateModal(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer</label>
                <select
                  value={newReceipt.customer}
                  onChange={(e) => setNewReceipt({...newReceipt, customer: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a customer</option>
                  {mockCustomers.map((customer) => (
                    <option key={customer} value={customer}>{customer}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount ($)</label>
                <input
                  type="number"
                  value={newReceipt.amount}
                  onChange={(e) => setNewReceipt({...newReceipt, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter payment amount"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date</label>
                <input
                  type="date"
                  value={newReceipt.date}
                  onChange={(e) => setNewReceipt({...newReceipt, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowGenerateModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerateReceipt}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 font-medium"
              >
                Generate Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 