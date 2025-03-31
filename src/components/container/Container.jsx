import React from 'react';

export default function Container({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
      <h1>belajar react dasar</h1>
      </header>
      <main className="flex-grow">
      {children}
      </main>
      <footer className="bg-slate-500 text-white text-center py-3 mt-auto">
        <p>@ 2025 belajar react dasar</p>
      </footer>
    </div>
  );
}
