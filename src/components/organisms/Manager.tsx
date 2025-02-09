import { SearchFilters } from '../molecules/SearchFilters';
import { TableAdministrate } from '../molecules/TableAdministrate';

const MOCK_DATA = [
    {
        id: '1',
        actions: ['view', 'download'],
        processNumber: '656',
        date: '2025-ene-27 4:39 PM',
        person: {
            name: 'Heirya Consuelo Estevez Suarez',
            id: '37861792',
            type: 'C.C'
        },
        advisor: {
            name: 'Kevin Beltran',
            email: 'kevin.beltran@technokey.co',
            phone: '3134839651',
            group: 'Grupo JR'
        },
        status: 'Pendiente'
    }
];

export function Manager() {
    const handleSearch = () => {
        // Implement search logic
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
                <SearchFilters onSearch={handleSearch} />
            </div>
            <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow">
                    <TableAdministrate consents={MOCK_DATA} />
                </div>
            </div>
        </div>
    );
}