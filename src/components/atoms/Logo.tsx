import { Brain } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Brain className="text-blue-500" size={24} />
      <span className="font-bold text-xl">Sincroniza</span>
    </div>
  );
}