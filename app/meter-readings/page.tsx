"use client";

import React, { useState } from 'react';

const mockReadings = [
  { id: 1, customer: 'Alice Johnson', reading: 120, date: '2024-06-01' },
  { id: 2, customer: 'Bob Smith', reading: 98, date: '2024-06-01' },
  { id: 3, customer: 'Carol Lee', reading: 110, date: '2024-06-01' },
];

const mockCustomers = ['Alice Johnson', 'Bob Smith', 'Carol Lee', 'David Wilson', 'Eva Brown'];

export default function MeterReadingsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [readings, setReadings] = useState(mockReadings);
  const [selectedReading, setSelectedReading] = useState<any>(null);
  const [newReading, setNewReading] = useState({
    customer: '',
    reading: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [editReading, setEditReading] = useState({
    customer: '',
    reading: '',
    date: ''
  });

  const handleAddReading = () => {
    if (newReading.customer && newReading.reading && newReading.date) {
      const reading = {
        id: readings.length + 1,
        customer: newReading.customer,
        reading: parseInt(newReading.reading),
        date: newReading.date
      };
      setReadings([...readings, reading]);
      setNewReading({ customer: '', reading: '', date: new Date().toISOString().split('T')[0] });
      setShowAddModal(false);
    }
  };

  const handleEditReading = (reading: any) => {
    setSelectedReading(reading);
    setEditReading({
      customer: reading.customer,
      reading: reading.reading.toString(),
      date: reading.date
    });
    setShowEditModal(true);
  };

  const handleUpdateReading = () => {
    if (editReading.customer && editReading.reading && editReading.date) {
      const updatedReadings = readings.map(r => 
        r.id === selectedReading.id 
          ? { ...r, customer: editReading.customer, reading: parseInt(editReading.reading), date: editReading.date }
          : r
      );
      setReadings(updatedReadings);
      setShowEditModal(false);
      setSelectedReading(null);
    }
  };

  const handleViewReading = (reading: any) => {
    setSelectedReading(reading);
    setShowViewModal(true);
  };

  const handleDeleteReading = (reading: any) => {
    setSelectedReading(reading);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedReadings = readings.filter(r => r.id !== selectedReading.id);
    setReadings(updatedReadings);
    setShowDeleteModal(false);
    setSelectedReading(null);
  };

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
            onClick={() => setShowAddModal(true)}
            className="btn bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-full active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300 flex items-center gap-2"
            style={{ borderRadius: '9999px' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Reading
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
              <th className="py-4 px-5 font-semibold text-green-700 text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((r) => (
              <tr key={r.id} className="border-b last:border-b-0 hover:bg-green-50 transition-shadow hover:shadow-md">
                <td className="py-4 px-5 text-gray-800 text-base">{r.customer}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{r.reading}</td>
                <td className="py-4 px-5 text-gray-800 text-base">{r.date}</td>
                <td className="py-4 px-5">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewReading(r)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    <button 
                      onClick={() => handleEditReading(r)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteReading(r)}
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
          <ellipse cx="90" cy="90" rx="80" ry="10" fill="#bbf7d0" />
          <rect x="60" y="30" width="60" height="40" rx="10" fill="#22c55e" />
          <rect x="75" y="45" width="30" height="10" rx="3" fill="#fff" />
        </svg>
      </div>
      
      {/* Floating action button for mobile */}
      <button 
        onClick={() => setShowAddModal(true)}
        className="sm:hidden fixed bottom-6 right-6 btn bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-3xl p-0 w-14 h-14 flex items-center justify-center shadow-lg rounded-full transition-all duration-300 hover:scale-110"
      >
        +
      </button>

      {/* Add Reading Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Add New Reading</h2>
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
                  value={newReading.customer}
                  onChange={(e) => setNewReading({...newReading, customer: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a customer</option>
                  {mockCustomers.map((customer) => (
                    <option key={customer} value={customer}>{customer}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meter Reading</label>
                <input
                  type="number"
                  value={newReading.reading}
                  onChange={(e) => setNewReading({...newReading, reading: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter meter reading"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reading Date</label>
                <input
                  type="date"
                  value={newReading.date}
                  onChange={(e) => setNewReading({...newReading, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                onClick={handleAddReading}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
              >
                Add Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Reading Modal */}
      {showEditModal && selectedReading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Reading</h2>
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
                  value={editReading.customer}
                  onChange={(e) => setEditReading({...editReading, customer: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a customer</option>
                  {mockCustomers.map((customer) => (
                    <option key={customer} value={customer}>{customer}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meter Reading</label>
                <input
                  type="number"
                  value={editReading.reading}
                  onChange={(e) => setEditReading({...editReading, reading: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter meter reading"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reading Date</label>
                <input
                  type="date"
                  value={editReading.date}
                  onChange={(e) => setEditReading({...editReading, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                onClick={handleUpdateReading}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
              >
                Update Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Reading Modal */}
      {showViewModal && selectedReading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Reading Details</h2>
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
              <div className="bg-green-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <span className="text-lg font-semibold text-gray-800">Meter Reading #{selectedReading.id}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-700">Customer: {selectedReading.customer}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-700">Reading: {selectedReading.reading} units</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">Date: {selectedReading.date}</span>
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
                  handleEditReading(selectedReading);
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
              >
                Edit Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedReading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Reading</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete the reading for <strong>{selectedReading.customer}</strong>? This action cannot be undone.
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