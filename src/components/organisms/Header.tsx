import { Timer, Plus, Bell } from 'lucide-react';
import { IconButton } from '../atoms/IconButton';
import { GeneralButton } from '../atoms/GeneralButton';

export function Header() {
    return (
        <header className="border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Timer className="w-6 h-6 text-indigo-600" />
                    <h1 className="text-xl font-semibold">TimeFlow</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <GeneralButton variant="primary" icon={Plus}>New Task</GeneralButton>
                    <IconButton icon={Bell} />
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                </div>
            </div>
        </header>
    );
}