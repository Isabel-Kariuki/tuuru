"use client";

import React, { useState } from 'react';

const mockBills = [
  { id: 1, customer: 'Alice Johnson', amount: 45.00, due: '2024-06-10', status: 'Unpaid' },
  { id: 2, customer: 'Bob Smith', amount: 38.50, due: '2024-06-10', status: 'Paid' },
  { id: 3, customer: 'Carol Lee', amount: 41.25, due: '2024-06-10', status: 'Unpaid' },
];

const mockCustomers = ['Alice Johnson', 'Bob Smith', 'Carol Lee', 'David Wilson', 'Eva Brown'];

export default function BillsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bills, setBills] = useState(mockBills);
  const [selectedBill, setSelectedBill] = useState<any>(null);
  const [newBill, setNewBill] = useState({
    customer: '',
    amount: '',
    due: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });
  const [editBill, setEditBill] = useState({
    customer: '',
    amount: '',
    due: '',
    status: ''
  });

  const handleGenerateBill = () => {
    if (newBill.customer && newBill.amount && newBill.due) {
      const bill = {
        id: bills.length + 1,
        customer: newBill.customer,
        amount: parseFloat(newBill.amount),
        due: newBill.due,
        status: 'Unpaid'
      };
      setBills([...bills, bill]);
      setNewBill({ customer: '', amount: '', due: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] });
      setShowAddModal(false);
    }
  };

  const handleEditBill = (bill: any) => {
    setSelectedBill(bill);
    setEditBill({
      customer: bill.customer,
      amount: bill.amount.toString(),
      due: bill.due,
      status: bill.status
    });
    setShowEditModal(true);
  };

  const handleUpdateBill = () => {
    if (editBill.customer && editBill.amount && editBill.due && editBill.status) {
      const updatedBills = bills.map(b => 
        b.id === selectedBill.id 
          ? { ...b, customer: editBill.customer, amount: parseFloat(editBill.amount), due: editBill.due, status: editBill.status }
          : b
      );
      setBills(updatedBills);
      setShowEditModal(false);
      setSelectedBill(null);
    }
  };

  const handleViewBill = (bill: any) => {
    setSelectedBill(bill);
    setShowViewModal(true);
  };

  const handleDeleteBill = (bill: any) => {
    setSelectedBill(bill);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedBills = bills.filter(b => b.id !== selectedBill.id);
    setBills(updatedBills);
    setShowDeleteModal(false);
    setSelectedBill(null);
  };

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
            onClick={() => setShowAddModal(true)}
            className="btn bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center gap-2"
            style={{ borderRadius: '9999px' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Generate Bill
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
              <th className="py-4 px-5 font-semibold text-yellow-700 text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((b) => (
              <tr key={b.id} className="border-b last:border-b-0 hover:bg-yellow-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{b.customer}</td>
                <td className="py-4 px-5 text-gray-800 text-base">${b.amount.toFixed(2)}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{b.due}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${b.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{b.status}</span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewBill(b)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    <button 
                      onClick={() => handleEditBill(b)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteBill(b)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
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
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#fef9c3" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#facc15" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      
      {/* Floating action button for mobile */}
      <button 
        onClick={() => setShowAddModal(true)}
        className="sm:hidden fixed bottom-6 right-6 btn bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg rounded-full transition-all duration-300 hover:scale-110"
      >
        +
      </button>

      {/* Generate Bill Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Generate New Bill</h2>
              <button
                onClick={() => setShowAddModal(false)}
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
                  value={newBill.customer}
                  onChange={(e) => setNewBill({...newBill, customer: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a customer</option>
                  {mockCustomers.map((customer) => (
                    <option key={customer} value={customer}>{customer}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill Amount ($)</label>
                <input
                  type="number"
                  value={newBill.amount}
                  onChange={(e) => setNewBill({...newBill, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter bill amount"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                <input
                  type="date"
                  value={newBill.due}
                  onChange={(e) => setNewBill({...newBill, due: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerateBill}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 font-medium"
              >
                Generate Bill
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Bill Modal */}
      {showEditModal && selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Bill</h2>
              <button
                onClick={() => setShowEditModal(false)}
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
                  value={editBill.customer}
                  onChange={(e) => setEditBill({...editBill, customer: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a customer</option>
                  {mockCustomers.map((customer) => (
                    <option key={customer} value={customer}>{customer}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill Amount ($)</label>
                <input
                  type="number"
                  value={editBill.amount}
                  onChange={(e) => setEditBill({...editBill, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter bill amount"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                <input
                  type="date"
                  value={editBill.due}
                  onChange={(e) => setEditBill({...editBill, due: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={editBill.status}
                  onChange={(e) => setEditBill({...editBill, status: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select status</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateBill}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
              >
                Update Bill
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Bill Modal */}
      {showViewModal && selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Bill Details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h4" />
                  </svg>
                  <span className="text-lg font-semibold text-gray-800">Bill #{selectedBill.id}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-700">Customer: {selectedBill.customer}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                    <span className="text-gray-700">Amount: ${selectedBill.amount.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">Due Date: {selectedBill.due}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Status: 
                      <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
                        selectedBill.status === 'Paid' ? 'bg-green-200 text-green-800' : 
                        selectedBill.status === 'Unpaid' ? 'bg-red-200 text-red-800' : 
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {selectedBill.status}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowViewModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  handleEditBill(selectedBill);
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 font-medium"
              >
                Edit Bill
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedBill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Bill</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete the bill for <strong>{selectedBill.customer}</strong>? This action cannot be undone.
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 