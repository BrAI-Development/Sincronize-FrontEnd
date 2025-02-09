import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card } from '../atoms/Card';

interface AdminCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export const AdminCard: React.FC<AdminCardProps> = ({ 
  icon: Icon,
  title, 
  description,
  onClick 
}) => {
  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <div className="flex gap-4">
        <div className="p-2 bg-blue-50 rounded-lg flex items-center">
          <Icon className="text-blue-500" size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}