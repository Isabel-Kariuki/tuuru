'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import React, { useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Sidebar menu items with icons
  const menu = [
    { label: 'Dashboard', href: '/', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8a2 2 0 002 2h4a2 2 0 002-2v-8m-6 0h6" /></svg>
    ) },
    { label: 'Customers', href: '/customers', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6-2a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
    ) },
    { label: 'Meter Readings', href: '/meter-readings', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="11" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" /></svg>
    ) },
    { label: 'Bills', href: '/bills', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
    ) },
    { label: 'Payments', href: '/payments', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 10h20" /></svg>
    ) },
    { label: 'Reports', href: '/reports', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ), badge: true },
    { label: 'Receipts', href: '/receipts', icon: (
      <svg className="w-6 h-6 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
    ) },
  ];
  const secondary = [
    { label: 'Settings', icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    ) },
    { label: 'Logout', icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4" /></svg>
    ) },
  ];
  // Get current path for active highlight (Next.js 13+ usePathname)
  let pathname = '';
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }

  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <div className="flex h-screen">
          {/* Sidebar for desktop (retractable) */}
          <aside className={`hidden md:flex flex-col transition-all duration-300 ${sidebarOpen ? 'w-20' : 'w-72'} bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-2xl p-0 rounded-r-3xl border-r border-blue-300/30 relative overflow-hidden`} style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(147, 51, 234, 0.95) 50%, rgba(79, 70, 229, 0.95) 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800"><defs><pattern id="sidebar-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.08)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23sidebar-pattern)"/></svg>')
            `,
            backgroundSize: 'cover, 60px 60px',
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat, repeat'
          }}>
            {/* Sidebar toggle button */}
            <button
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition md:block hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {sidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-indigo-400/20"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Logo/Branding */}
            <div className={`flex flex-col items-center py-10 z-10 relative transition-all duration-300 ${sidebarOpen ? 'opacity-0 pointer-events-none h-0' : 'opacity-100 h-auto'}`}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-200 via-white to-purple-200 flex items-center justify-center shadow-2xl mb-4 border-4 border-white/80 backdrop-blur-sm">
                {/* Enhanced Water drop icon */}
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 7 8.5 7 13a5 5 0 0010 0c0-4.5-5-11-5-11z" />
                  <circle cx="12" cy="17" r="3" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg mb-1">Tuuru Water</span>
              <span className="text-blue-100 text-sm font-medium">Billing System</span>
            </div>
            {/* Enhanced Menu */}
            <nav className={`flex flex-col gap-3 mt-8 px-2 z-10 ${sidebarOpen ? 'items-center' : 'px-6'}`}>
              {menu.map((item) => {
                const isActive = typeof window !== 'undefined' && pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center ${sidebarOpen ? 'justify-center px-2' : 'px-6'} py-4 my-1 rounded-2xl font-semibold transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-white/30 overflow-hidden ${isActive ? 'bg-white/20 text-white shadow-xl border-l-4 border-white backdrop-blur-sm' : 'text-white/90 hover:bg-white/10 hover:text-white hover:scale-105'}`}
                    style={{ fontSize: sidebarOpen ? '1.5rem' : '1.1rem' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      {item.icon}
                      {!sidebarOpen && item.label}
                      {item.badge && !sidebarOpen && (
                        <span className="ml-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-lg">New</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </nav>
            {/* Divider */}
            <div className={`my-6 border-t border-blue-200/40 mx-6 ${sidebarOpen ? 'hidden' : ''}`} />
            {/* Enhanced Footer: User avatar and secondary actions */}
            <div className={`flex flex-col items-center mb-8 mt-auto z-10 relative transition-all duration-300 ${sidebarOpen ? 'opacity-0 pointer-events-none h-0' : 'opacity-100 h-auto'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-300 via-white to-purple-200 flex items-center justify-center shadow-2xl border-4 border-white/80 mb-3 backdrop-blur-sm">
                <span className="text-xl font-bold text-blue-700">AD</span>
              </div>
              <span className="text-white/90 font-medium mb-4">Admin User</span>
              <div className="flex gap-3">
                {secondary.map((item) => (
                  <button key={item.label} className="flex items-center px-4 py-2 rounded-xl bg-white/10 text-white font-medium text-sm shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Enhanced decorative elements at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"></div>
          </aside>
          {/* Mobile sidebar (slide-in) */}
          <div className="md:hidden">
            <button
              className="fixed top-4 left-4 z-30 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow-lg"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {sidebarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <div className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)} />
            <aside className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-2xl p-0 rounded-r-3xl border-r border-blue-300/30 z-30 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(147, 51, 234, 0.95) 50%, rgba(79, 70, 229, 0.95) 100%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800"><defs><pattern id="sidebar-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.08)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23sidebar-pattern)"/></svg>')
              `,
              backgroundSize: 'cover, 60px 60px',
              backgroundPosition: 'center, center',
              backgroundRepeat: 'no-repeat, repeat'
            }}>
              <nav className="flex flex-col gap-3 mt-16 px-6 z-10">
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center px-6 py-4 my-1 rounded-2xl font-semibold transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-white/30 overflow-hidden text-white/90 hover:bg-white/10 hover:text-white hover:scale-105"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className="relative z-10 flex items-center">
                      {item.icon}
                      {item.label}
                      {item.badge && (
                        <span className="ml-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-lg">New</span>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>
            </aside>
          </div>
          {/* Main content */}
          <main className="flex-1 p-2 sm:p-4 overflow-y-auto relative min-w-0">
            {/* Floating background elements */}
            <div className="fixed top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="fixed bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="fixed top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-lg animate-pulse delay-500"></div>
            <div className="fixed bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-tr from-indigo-100/20 to-purple-100/20 rounded-full blur-xl animate-pulse delay-1500"></div>
            
            <div className="relative z-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
