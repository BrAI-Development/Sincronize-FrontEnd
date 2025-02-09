import { Brain } from 'lucide-react';

export function WelcomeMessage() {
    return (
        <div className="text-center space-y-4">
            <Brain className="w-24 h-24 text-blue-500 mx-auto" />
            <h1 className="text-4xl font-bold text-blue-500">BIENVENIDOS</h1>
            <p className="text-gray-600 text-lg">
                Sistema de Gestión de Innovación y Desarrollo
            </p>
        </div>
    );
}