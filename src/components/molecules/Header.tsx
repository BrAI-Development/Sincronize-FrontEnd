import { LogOut } from 'lucide-react';
import { Logo } from '../atoms/Logo';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <button 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            onClick={() => {/* Handle logout */}}
          >
            <span>Salir</span>
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}