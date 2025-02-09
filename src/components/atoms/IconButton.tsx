import { DivideIcon as LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export function IconButton({ icon: Icon, onClick, className = '' }: IconButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 rounded-full ${className}`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}