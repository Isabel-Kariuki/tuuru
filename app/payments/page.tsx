"use client";

import React, { useState } from 'react';

const mockPayments = [
  { id: 1, bill: 'BILL001', amount: 45.00, method: 'Cash', date: '2024-06-05' },
  { id: 2, bill: 'BILL002', amount: 38.50, method: 'Card', date: '2024-06-06' },
  { id: 3, bill: 'BILL003', amount: 41.25, method: 'Mobile', date: '2024-06-07' },
];

const mockBills = ['BILL001', 'BILL002', 'BILL003', 'BILL004', 'BILL005'];
const paymentMethods = ['Cash', 'Card', 'Bank Transfer', 'Mobile Money', 'Check'];

export default function PaymentsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [payments, setPayments] = useState(mockPayments);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [newPayment, setNewPayment] = useState({
    bill: '',
    amount: '',
    method: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [editPayment, setEditPayment] = useState({
    bill: '',
    amount: '',
    method: '',
    date: ''
  });

  const handleAddPayment = () => {
    if (newPayment.bill && newPayment.amount && newPayment.method && newPayment.date) {
      const payment = {
        id: payments.length + 1,
        bill: newPayment.bill,
        amount: parseFloat(newPayment.amount),
        method: newPayment.method,
        date: newPayment.date
      };
      setPayments([...payments, payment]);
      setNewPayment({ bill: '', amount: '', method: '', date: new Date().toISOString().split('T')[0] });
      setShowAddModal(false);
    }
  };

  const handleEditPayment = (payment: any) => {
    setSelectedPayment(payment);
    setEditPayment({
      bill: payment.bill,
      amount: payment.amount.toString(),
      method: payment.method,
      date: payment.date
    });
    setShowEditModal(true);
  };

  const handleUpdatePayment = () => {
    if (editPayment.bill && editPayment.amount && editPayment.method && editPayment.date) {
      const updatedPayments = payments.map(p => 
        p.id === selectedPayment.id 
          ? { ...p, bill: editPayment.bill, amount: parseFloat(editPayment.amount), method: editPayment.method, date: editPayment.date }
          : p
      );
      setPayments(updatedPayments);
      setShowEditModal(false);
      setSelectedPayment(null);
    }
  };

  const handleViewPayment = (payment: any) => {
    setSelectedPayment(payment);
    setShowViewModal(true);
  };

  const handleDeletePayment = (payment: any) => {
    setSelectedPayment(payment);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedPayments = payments.filter(p => p.id !== selectedPayment.id);
    setPayments(updatedPayments);
    setShowDeleteModal(false);
    setSelectedPayment(null);
  };

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
            onClick={() => setShowAddModal(true)}
            className="btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-300 flex items-center gap-2"
            style={{ borderRadius: '9999px' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Payment
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
              <th className="py-4 px-5 font-semibold text-purple-700 text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-b last:border-b-0 hover:bg-purple-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{p.bill}</td>
                <td className="py-4 px-5 text-gray-800 text-base">${p.amount.toFixed(2)}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{p.method}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{p.date}</td>
                <td className="py-4 px-5">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewPayment(p)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    <button 
                      onClick={() => handleEditPayment(p)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeletePayment(p)}
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
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#e9d5ff" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#a21caf" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      
      {/* Floating action button for mobile */}
      <button 
        onClick={() => setShowAddModal(true)}
        className="sm:hidden fixed bottom-6 right-6 btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg rounded-full transition-all duration-300 hover:scale-110"
      >
        +
      </button>

      {/* Add Payment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Add New Payment</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill ID</label>
                <select
                  value={newPayment.bill}
                  onChange={(e) => setNewPayment({...newPayment, bill: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a bill</option>
                  {mockBills.map((bill) => (
                    <option key={bill} value={bill}>{bill}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount ($)</label>
                <input
                  type="number"
                  value={newPayment.amount}
                  onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter payment amount"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <select
                  value={newPayment.method}
                  onChange={(e) => setNewPayment({...newPayment, method: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select payment method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date</label>
                <input
                  type="date"
                  value={newPayment.date}
                  onChange={(e) => setNewPayment({...newPayment, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
                onClick={handleAddPayment}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-medium"
              >
                Add Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Payment Modal */}
      {showEditModal && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Payment</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill ID</label>
                <select
                  value={editPayment.bill}
                  onChange={(e) => setEditPayment({...editPayment, bill: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a bill</option>
                  {mockBills.map((bill) => (
                    <option key={bill} value={bill}>{bill}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount ($)</label>
                <input
                  type="number"
                  value={editPayment.amount}
                  onChange={(e) => setEditPayment({...editPayment, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter payment amount"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <select
                  value={editPayment.method}
                  onChange={(e) => setEditPayment({...editPayment, method: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select payment method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date</label>
                <input
                  type="date"
                  value={editPayment.date}
                  onChange={(e) => setEditPayment({...editPayment, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
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
                onClick={handleUpdatePayment}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
              >
                Update Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Payment Modal */}
      {showViewModal && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
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
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="10" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  <span className="text-lg font-semibold text-gray-800">Payment #{selectedPayment.id}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 8h8M8 12h8M8 16h4" />
                    </svg>
                    <span className="text-gray-700">Bill ID: {selectedPayment.bill}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                    <span className="text-gray-700">Amount: ${selectedPayment.amount.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-gray-700">Method: 
                      <span className="ml-2 px-2 py-1 rounded text-xs font-semibold bg-purple-200 text-purple-800">
                        {selectedPayment.method}
                      </span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">Date: {selectedPayment.date}</span>
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
                  handleEditPayment(selectedPayment);
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-medium"
              >
                Edit Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Payment</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete the payment for <strong>{selectedPayment.bill}</strong>? This action cannot be undone.
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