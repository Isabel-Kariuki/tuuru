"use client";

import React, { useState } from 'react';

// Data for different time periods
const periodData = {
  week: {
    summary: [
      { 
        label: 'Total Customers', 
        value: 45, 
        color: 'bg-blue-50', 
        accent: 'text-blue-700',
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        ),
        trend: '+5%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Bills', 
        value: 38, 
        color: 'bg-yellow-50', 
        accent: 'text-yellow-700',
        icon: (
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        trend: '+3%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Payments', 
        value: 32, 
        color: 'bg-purple-50', 
        accent: 'text-purple-700',
        icon: (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        trend: '+8%',
        trendColor: 'text-green-600'
      },
    ],
    details: [
      { id: 1, customer: 'Alice Johnson', bills: 1, payments: 1, status: 'Active' },
      { id: 2, customer: 'Bob Smith', bills: 1, payments: 1, status: 'Active' },
      { id: 3, customer: 'Carol Lee', bills: 1, payments: 0, status: 'Pending' },
    ]
  },
  month: {
    summary: [
      { 
        label: 'Total Customers', 
        value: 128, 
        color: 'bg-blue-50', 
        accent: 'text-blue-700',
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        ),
        trend: '+12%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Bills', 
        value: 120, 
        color: 'bg-yellow-50', 
        accent: 'text-yellow-700',
        icon: (
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        trend: '+8%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Payments', 
        value: 110, 
        color: 'bg-purple-50', 
        accent: 'text-purple-700',
        icon: (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        trend: '+15%',
        trendColor: 'text-green-600'
      },
    ],
    details: [
      { id: 1, customer: 'Alice Johnson', bills: 3, payments: 2, status: 'Active' },
      { id: 2, customer: 'Bob Smith', bills: 2, payments: 2, status: 'Active' },
      { id: 3, customer: 'Carol Lee', bills: 2, payments: 1, status: 'Pending' },
      { id: 4, customer: 'David Wilson', bills: 4, payments: 3, status: 'Active' },
      { id: 5, customer: 'Eva Brown', bills: 1, payments: 0, status: 'Overdue' },
    ]
  },
  quarter: {
    summary: [
      { 
        label: 'Total Customers', 
        value: 342, 
        color: 'bg-blue-50', 
        accent: 'text-blue-700',
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        ),
        trend: '+18%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Bills', 
        value: 315, 
        color: 'bg-yellow-50', 
        accent: 'text-yellow-700',
        icon: (
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        trend: '+12%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Payments', 
        value: 298, 
        color: 'bg-purple-50', 
        accent: 'text-purple-700',
        icon: (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        trend: '+22%',
        trendColor: 'text-green-600'
      },
    ],
    details: [
      { id: 1, customer: 'Alice Johnson', bills: 9, payments: 8, status: 'Active' },
      { id: 2, customer: 'Bob Smith', bills: 6, payments: 6, status: 'Active' },
      { id: 3, customer: 'Carol Lee', bills: 6, payments: 4, status: 'Pending' },
      { id: 4, customer: 'David Wilson', bills: 12, payments: 11, status: 'Active' },
      { id: 5, customer: 'Eva Brown', bills: 3, payments: 1, status: 'Overdue' },
      { id: 6, customer: 'Frank Miller', bills: 8, payments: 7, status: 'Active' },
    ]
  },
  year: {
    summary: [
      { 
        label: 'Total Customers', 
        value: 1247, 
        color: 'bg-blue-50', 
        accent: 'text-blue-700',
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" />
          </svg>
        ),
        trend: '+25%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Bills', 
        value: 1189, 
        color: 'bg-yellow-50', 
        accent: 'text-yellow-700',
        icon: (
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        trend: '+18%',
        trendColor: 'text-green-600'
      },
      { 
        label: 'Total Payments', 
        value: 1123, 
        color: 'bg-purple-50', 
        accent: 'text-purple-700',
        icon: (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        trend: '+32%',
        trendColor: 'text-green-600'
      },
    ],
    details: [
      { id: 1, customer: 'Alice Johnson', bills: 36, payments: 34, status: 'Active' },
      { id: 2, customer: 'Bob Smith', bills: 24, payments: 24, status: 'Active' },
      { id: 3, customer: 'Carol Lee', bills: 24, payments: 18, status: 'Pending' },
      { id: 4, customer: 'David Wilson', bills: 48, payments: 45, status: 'Active' },
      { id: 5, customer: 'Eva Brown', bills: 12, payments: 8, status: 'Overdue' },
      { id: 6, customer: 'Frank Miller', bills: 32, payments: 30, status: 'Active' },
      { id: 7, customer: 'Grace Taylor', bills: 28, payments: 26, status: 'Active' },
    ]
  }
};

// Customer details data
const customerDetails = {
  'Alice Johnson': {
    id: 'CUST001',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, ST 12345',
    meterNumber: 'MTR-2024-001',
    accountType: 'Residential',
    joinDate: '2023-01-15',
    billingHistory: [
      { month: 'Jan 2024', amount: 45.50, status: 'Paid', date: '2024-01-15' },
      { month: 'Feb 2024', amount: 52.30, status: 'Paid', date: '2024-02-15' },
      { month: 'Mar 2024', amount: 48.75, status: 'Paid', date: '2024-03-15' },
    ],
    paymentHistory: [
      { date: '2024-01-15', amount: 45.50, method: 'Credit Card' },
      { date: '2024-02-15', amount: 52.30, method: 'Bank Transfer' },
      { date: '2024-03-15', amount: 48.75, method: 'Credit Card' },
    ]
  },
  'Bob Smith': {
    id: 'CUST002',
    email: 'bob.smith@email.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Ave, Somewhere, ST 67890',
    meterNumber: 'MTR-2024-002',
    accountType: 'Residential',
    joinDate: '2023-03-20',
    billingHistory: [
      { month: 'Jan 2024', amount: 38.25, status: 'Paid', date: '2024-01-20' },
      { month: 'Feb 2024', amount: 41.80, status: 'Paid', date: '2024-02-20' },
      { month: 'Mar 2024', amount: 39.50, status: 'Paid', date: '2024-03-20' },
    ],
    paymentHistory: [
      { date: '2024-01-20', amount: 38.25, method: 'Bank Transfer' },
      { date: '2024-02-20', amount: 41.80, method: 'Credit Card' },
      { date: '2024-03-20', amount: 39.50, method: 'Bank Transfer' },
    ]
  },
  'Carol Lee': {
    id: 'CUST003',
    email: 'carol.lee@email.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine Rd, Elsewhere, ST 13579',
    meterNumber: 'MTR-2024-003',
    accountType: 'Commercial',
    joinDate: '2023-06-10',
    billingHistory: [
      { month: 'Jan 2024', amount: 125.75, status: 'Paid', date: '2024-01-10' },
      { month: 'Feb 2024', amount: 138.90, status: 'Paid', date: '2024-02-10' },
      { month: 'Mar 2024', amount: 142.30, status: 'Pending', date: '2024-03-10' },
    ],
    paymentHistory: [
      { date: '2024-01-10', amount: 125.75, method: 'Bank Transfer' },
      { date: '2024-02-10', amount: 138.90, method: 'Bank Transfer' },
    ]
  },
  'David Wilson': {
    id: 'CUST004',
    email: 'david.wilson@email.com',
    phone: '+1 (555) 456-7890',
    address: '321 Elm St, Nowhere, ST 24680',
    meterNumber: 'MTR-2024-004',
    accountType: 'Residential',
    joinDate: '2023-08-05',
    billingHistory: [
      { month: 'Jan 2024', amount: 67.40, status: 'Paid', date: '2024-01-05' },
      { month: 'Feb 2024', amount: 71.20, status: 'Paid', date: '2024-02-05' },
      { month: 'Mar 2024', amount: 69.80, status: 'Paid', date: '2024-03-05' },
    ],
    paymentHistory: [
      { date: '2024-01-05', amount: 67.40, method: 'Credit Card' },
      { date: '2024-02-05', amount: 71.20, method: 'Credit Card' },
      { date: '2024-03-05', amount: 69.80, method: 'Bank Transfer' },
    ]
  },
  'Eva Brown': {
    id: 'CUST005',
    email: 'eva.brown@email.com',
    phone: '+1 (555) 567-8901',
    address: '654 Maple Dr, Anywhere, ST 13579',
    meterNumber: 'MTR-2024-005',
    accountType: 'Residential',
    joinDate: '2023-11-12',
    billingHistory: [
      { month: 'Jan 2024', amount: 29.95, status: 'Paid', date: '2024-01-12' },
      { month: 'Feb 2024', amount: 31.50, status: 'Overdue', date: '2024-02-12' },
      { month: 'Mar 2024', amount: 33.25, status: 'Pending', date: '2024-03-12' },
    ],
    paymentHistory: [
      { date: '2024-01-12', amount: 29.95, method: 'Credit Card' },
    ]
  }
};

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  // Get current data based on selected period
  const currentData = periodData[selectedPeriod as keyof typeof periodData];
  const summary = currentData.summary;
  const details = currentData.details;

  const handleViewDetails = (customerName: string) => {
    setSelectedCustomer(customerName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Enhanced Hero/Header Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-10 mb-12 shadow-2xl border border-blue-100/50 overflow-hidden" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(239, 246, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(250, 245, 255, 0.95) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300"><defs><pattern id="reports-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="3" fill="rgba(59,130,246,0.1)"/><circle cx="20" cy="20" r="1.5" fill="rgba(147,51,234,0.08)"/><circle cx="60" cy="60" r="2" fill="rgba(59,130,246,0.06)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23reports-pattern)"/></svg>')
        `,
        backgroundSize: 'cover, 80px 80px',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, repeat'
      }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Analytics Dashboard
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
              Reports & Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-6">
              Comprehensive insights into your water utility system. Track performance, analyze trends, and make data-driven decisions.
            </p>
            
            {/* Enhanced Period Selector */}
            <div className="flex gap-2">
              {['week', 'month', 'quarter', 'year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedPeriod === period
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white/50 text-gray-600 hover:bg-white/80 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                  {selectedPeriod === period && (
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      Active
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.2)" />
                <path d="M20 30h40v20H20z" fill="rgba(255,255,255,0.8)" rx="4" />
                <path d="M25 35h30v10H25z" fill="white" rx="2" />
                <circle cx="30" cy="40" r="2" fill="rgba(255,255,255,0.6)" />
                <circle cx="40" cy="40" r="2" fill="rgba(255,255,255,0.6)" />
                <circle cx="50" cy="40" r="2" fill="rgba(255,255,255,0.6)" />
              </svg>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        {summary.map((stat, index) => (
          <div
            key={stat.label}
            className={`card flex flex-col items-center justify-center ${stat.color} border-t-4 ${stat.accent} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer group relative overflow-hidden`}
            style={{ minHeight: '200px' }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon with enhanced styling */}
            <div className="relative z-10 mb-4 p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
            </div>
            
            {/* Stats with enhanced typography */}
            <div className="relative z-10 text-center">
              <span className={`text-5xl font-black mb-2 block ${stat.accent}`}>{stat.value}</span>
              <span className="text-gray-700 text-lg font-semibold mb-2">{stat.label}</span>
              <div className={`text-sm font-medium ${stat.trendColor}`}>
                {stat.trend} from last {selectedPeriod}
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Detailed Report Table */}
      <div className="card overflow-hidden border border-blue-100 relative">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Customer Activity Report - {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
          </h2>
          <p className="text-gray-600 mt-2">Detailed breakdown of customer billing and payment activities for the selected period</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                <th className="py-4 px-6 font-semibold text-blue-700 text-left">Customer</th>
                <th className="py-4 px-6 font-semibold text-blue-700 text-center">Bills</th>
                <th className="py-4 px-6 font-semibold text-blue-700 text-center">Payments</th>
                <th className="py-4 px-6 font-semibold text-blue-700 text-center">Status</th>
                <th className="py-4 px-6 font-semibold text-blue-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index) => (
                <tr key={detail.id} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-all duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                  <td className="py-4 px-6 text-gray-800 font-medium">{detail.customer}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                      {detail.bills}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                      {detail.payments}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      detail.status === 'Active' ? 'bg-green-100 text-green-800' :
                      detail.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {detail.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => handleViewDetails(detail.customer)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:scale-105 transform"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Details Modal */}
      {showModal && selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {selectedCustomer}
                  </h2>
                  <p className="text-gray-600 mt-1">Customer ID: {customerDetails[selectedCustomer as keyof typeof customerDetails]?.id}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{customerDetails[selectedCustomer as keyof typeof customerDetails]?.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">{customerDetails[selectedCustomer as keyof typeof customerDetails]?.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">{customerDetails[selectedCustomer as keyof typeof customerDetails]?.address}</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Meter: {customerDetails[selectedCustomer as keyof typeof customerDetails]?.meterNumber}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-700">Type: {customerDetails[selectedCustomer as keyof typeof customerDetails]?.accountType}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">Joined: {customerDetails[selectedCustomer as keyof typeof customerDetails]?.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing History */}
              <div className="card mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Billing History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Month</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Amount</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Status</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerDetails[selectedCustomer as keyof typeof customerDetails]?.billingHistory.map((bill, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-800">{bill.month}</td>
                          <td className="py-3 px-4 text-gray-800 font-medium">${bill.amount}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              bill.status === 'Paid' ? 'bg-green-100 text-green-800' :
                              bill.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {bill.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{bill.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payment History */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Date</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Amount</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerDetails[selectedCustomer as keyof typeof customerDetails]?.paymentHistory.map((payment, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-800">{payment.date}</td>
                          <td className="py-3 px-4 text-gray-800 font-medium">${payment.amount}</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {payment.method}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 