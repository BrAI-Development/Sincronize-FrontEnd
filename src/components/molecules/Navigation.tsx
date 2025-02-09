import { LayoutDashboard, FileText, BarChart2, Brain } from 'lucide-react';
import { NavLink } from '../atoms/NavLink';

export function Navigation() {
    return (
        <nav className="space-y-1 py-4">
            <NavLink icon={Brain} label="Bitácora" isActive={true} />
            <NavLink icon={LayoutDashboard} label="Dashboard" />
            <NavLink icon={FileText} label="Reportes" />
            <NavLink icon={BarChart2} label="Análisis" />
        </nav>
    );
}