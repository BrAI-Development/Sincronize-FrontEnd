import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavLinkProps {
    icon: LucideIcon;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export function NavLink({ icon: Icon, label, isActive = false, onClick }: NavLinkProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center space-x-3 w-full px-4 py-2 rounded-lg transition-colors ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
        >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
        </button>
    );
}