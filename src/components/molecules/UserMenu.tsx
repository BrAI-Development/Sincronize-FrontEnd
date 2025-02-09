import { ChevronDown } from 'lucide-react';
import { Avatar } from '../atoms/Avatar';

interface UserMenuProps {
    userName: string;
}

export function UserMenu({ userName }: UserMenuProps) {
    return (
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <Avatar name={userName} />
            <span className="font-medium">{userName}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
    );
}