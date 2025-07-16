import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="card w-full max-w-sm">
        <h1 className="text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">Admin Login</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button type="submit" className="btn bg-blue-600 hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
} 