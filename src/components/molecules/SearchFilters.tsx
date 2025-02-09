import { GeneralButton } from '../atoms/GeneralButton';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';

interface SearchFiltersProps {
    onSearch: () => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
    return (
        <div className="space-y-4 p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-medium">Filtros De Búsqueda</h3>

            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Número de Trámite"
                        placeholder="-- Desde Ej. 635231 --"
                    />
                    <Input
                        placeholder="-- Hasta Ej. 635231 --"
                    />
                </div>

                <Select
                    label="Estado"
                    options={[
                        { value: '', label: 'Todos' },
                        { value: 'pending', label: 'Pendiente' },
                        { value: 'approved', label: 'Aprobado' },
                    ]}
                />

                <Input
                    label="Número de Orden"
                    placeholder="-- Ej. orden1,orden2,orden3 --"
                />

                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Por Firmante"
                        placeholder="-- Nombre --"
                    />
                    <Input
                        placeholder="-- Apellido --"
                    />
                </div>

                <Input
                    label="Fecha de Solicitud"
                    type="date"
                />

                <Select
                    label="Asesor Asignado"
                    options={[
                        { value: '', label: '-- Todos los Asesores --' },
                    ]}
                />

                <Select
                    label="Sedes"
                    options={[
                        { value: '', label: '-- Seleccione --' },
                    ]}
                />

                <Select
                    label="Empresa Cliente"
                    options={[
                        { value: 'CORPORACION AVANCE', label: 'CORPORACION AVANCE' },
                    ]}
                />

                <GeneralButton onClick={onSearch} className="w-full">
                    Buscar
                </GeneralButton>
            </div>
        </div>
    );
}