import { Eye, FileText } from 'lucide-react';

interface Consent {
    id: string;
    actions: string[];
    processNumber: string;
    date: string;
    person: {
        name: string;
        id: string;
        type: string;
    };
    advisor: {
        name: string;
        email: string;
        phone: string;
        group: string;
    };
    status: string;
}

interface TableAdministrateProps {
    consents: Consent[];
}

export function TableAdministrate({ consents }: TableAdministrateProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Acciones
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Trámite
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fecha
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Persona
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Asesor
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {consents.map((consent) => (
                        <tr key={consent.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                    <Eye className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                                    <FileText className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {consent.processNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {consent.date}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <div className="font-medium text-gray-900">{consent.person.name}</div>
                                    <div className="text-gray-500">{consent.person.type} {consent.person.id}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm">
                                    <div className="font-medium text-gray-900">{consent.advisor.name}</div>
                                    <div className="text-gray-500">{consent.advisor.group}</div>
                                    <div className="text-gray-500">{consent.advisor.email}</div>
                                    <div className="text-gray-500">{consent.advisor.phone}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${consent.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                    }`}>
                                    {consent.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}