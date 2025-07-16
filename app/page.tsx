import React from 'react';
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
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-100 via-white to-purple-100 p-8 mb-10 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-tight">Welcome, Admin</h1>
          <p className="text-lg text-gray-600 max-w-xl">Manage your water utility system with ease. View stats, track customers, bills, payments, and more—all in one place.</p>
        </div>
        <div className="hidden md:block">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="60" fill="#e0e7ff" />
            <rect x="35" y="50" width="50" height="30" rx="8" fill="#4f8cff" />
            <rect x="45" y="60" width="30" height="10" rx="3" fill="#fff" />
          </svg>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {mockStats.map((stat) => {
          let href = null;
          if (stat.label === 'Customers') href = '/customers';
          if (stat.label === 'Meter Readings') href = '/meter-readings';
          if (stat.label === 'Bills') href = '/bills';
          if (stat.label === 'Payments') href = '/payments';
          const cardContent = (
            <div
              className={`card flex flex-col items-center ${stat.color} border-t-4 ${stat.accent} transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
              style={{ minHeight: '160px' }}
            >
              {stat.icon}
              <span className={`text-4xl font-bold mb-1 ${stat.accent}`}>{stat.value}</span>
              <span className="text-gray-700 mt-1 text-lg font-medium">{stat.label}</span>
            </div>
          );
          return href ? (
            <Link key={stat.label} href={href} className="block">
              {cardContent}
            </Link>
          ) : (
            <div key={stat.label}>{cardContent}</div>
          );
        })}
      </div>
      {/* System Overview */}
      <div className="card flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">System Overview</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-base">
            <li>Automated meter reading and billing</li>
            <li>Easy customer management</li>
            <li>Track payments and generate receipts</li>
            <li>Comprehensive reports and analytics</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#f1f5f9" />
            <rect x="30" y="40" width="40" height="20" rx="6" fill="#4f8cff" />
            <rect x="38" y="48" width="24" height="4" rx="2" fill="#fff" />
          </svg>
        </div>
      </div>
    </div>
  );
}
