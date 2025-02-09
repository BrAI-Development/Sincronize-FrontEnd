import { DivideIcon as LucideIcon } from 'lucide-react';

interface GeneralButtonProps {
    variant?: 'primary' | 'secondary';
    icon?: LucideIcon;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }

export function GeneralButton({ 
    variant = 'secondary', 
    icon: Icon, 
    children, 
    onClick,
    className = ''
  }: GeneralButtonProps) {
    const baseStyles = "flex items-center justify-center space-x-2 py-2 px-4 rounded-lg";
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      secondary: "border border-gray-300 hover:bg-gray-50"
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{children}</span>
      </button>
    );
  }