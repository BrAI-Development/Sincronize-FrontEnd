import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';

export function Sidebar() {
    return (
        <div className="w-64 h-screen border-r bg-white flex flex-col">
            <div className="p-4">
                <Logo />
            </div>
            <Navigation />
        </div>
    );
}