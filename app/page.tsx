"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const mockStats = [
  {
    label: 'Customers',
    value: 128,
    color: 'bg-blue-50',
    accent: 'text-blue-700',
    icon: (
      <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
    ),
  },
  {
    label: 'Meter Readings',
    value: 512,
    color: 'bg-green-50',
    accent: 'text-green-700',
    icon: (
      <svg className="w-8 h-8 text-green-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" /><circle cx="12" cy="11" r="3" /></svg>
    ),
  },
  {
    label: 'Bills',
    value: 120,
    color: 'bg-yellow-50',
    accent: 'text-yellow-700',
    icon: (
      <svg className="w-8 h-8 text-yellow-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
    ),
  },
  {
    label: 'Payments',
    value: 110,
    color: 'bg-purple-50',
    accent: 'text-purple-700',
    icon: (
      <svg className="w-8 h-8 text-purple-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 10h20" /></svg>
    ),
  },
];

export default function DashboardPage() {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowQuickActions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const quickActions = [
    {
      label: 'Add New Customer',
      href: '/customers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      color: 'text-blue-600'
    },
    {
      label: 'Record Meter Reading',
      href: '/meter-readings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" />
        </svg>
      ),
      color: 'text-green-600'
    },
    {
      label: 'Generate Bill',
      href: '/bills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'text-yellow-600'
    },
    {
      label: 'Process Payment',
      href: '/payments',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'text-purple-600'
    },
    {
      label: 'View Reports',
      href: '/reports',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'text-indigo-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Enhanced Hero Section */}
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-10 mb-12 shadow-2xl border border-blue-100/50 overflow-hidden" style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(239, 246, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(250, 245, 255, 0.95) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300"><defs><pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse"><circle cx="40" cy="40" r="3" fill="rgba(59,130,246,0.1)"/><circle cx="20" cy="20" r="1.5" fill="rgba(147,51,234,0.08)"/><circle cx="60" cy="60" r="2" fill="rgba(59,130,246,0.06)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23hero-pattern)"/></svg>')
        `,
        backgroundSize: 'cover, 80px 80px',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, repeat'
      }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              System Status: Online
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
              Welcome, Admin
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Manage your water utility system with ease. View real-time stats, track customers, 
              generate bills, process payments, and access comprehensive reports—all in one beautiful dashboard.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowQuickActions(!showQuickActions)}
                  className="btn px-8 py-3 text-lg flex items-center gap-2 relative"
                >
                  Quick Actions
                  <svg className={`w-5 h-5 transition-transform duration-300 ${showQuickActions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Quick Actions Dropdown */}
                {showQuickActions && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-2">
                      {quickActions.map((action, index) => (
                        <Link
                          key={action.label}
                          href={action.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group ${index === 0 ? 'mt-0' : 'mt-1'}`}
                          onClick={() => setShowQuickActions(false)}
                        >
                          <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200 ${action.color}`}>
                            {action.icon}
                          </div>
                          <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                            {action.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/reports">
                <button className="px-8 py-3 text-lg border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  View Reports
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.2)" />
                <path d="M25 30h30v20H25z" fill="rgba(255,255,255,0.8)" rx="4" />
                <path d="M30 35h20v10H30z" fill="white" rx="2" />
              </svg>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {mockStats.map((stat, index) => {
          let href = null;
          if (stat.label === 'Customers') href = '/customers';
          if (stat.label === 'Meter Readings') href = '/meter-readings';
          if (stat.label === 'Bills') href = '/bills';
          if (stat.label === 'Payments') href = '/payments';
          
          const cardContent = (
            <div
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
                <span className="text-gray-700 text-lg font-semibold">{stat.label}</span>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
            </div>
          );
          
          return href ? (
            <Link key={stat.label} href={href} className="block transform hover:scale-105 transition-transform duration-300">
              {cardContent}
            </Link>
          ) : (
            <div key={stat.label} className="transform hover:scale-105 transition-transform duration-300">
              {cardContent}
            </div>
          );
        })}
      </div>
      {/* Enhanced System Overview */}
      <div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
        
        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-sm mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            System Features
          </div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            System Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Automated Meter Reading</h3>
                <p className="text-gray-600 text-sm">Smart billing with real-time data collection</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Customer Management</h3>
                <p className="text-gray-600 text-sm">Comprehensive customer profiles and history</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Payment Tracking</h3>
                <p className="text-gray-600 text-sm">Real-time payment processing and receipts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Analytics & Reports</h3>
                <p className="text-gray-600 text-sm">Comprehensive insights and data visualization</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.2)" />
              <rect x="20" y="25" width="20" height="10" fill="rgba(255,255,255,0.8)" rx="2" />
              <rect x="25" y="28" width="10" height="4" fill="white" rx="1" />
            </svg>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-ping delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
