import React from 'react';
import { Header } from '../molecules/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const UserAdministrateLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}