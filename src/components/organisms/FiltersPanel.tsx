import { Filter } from 'lucide-react';
import { InputFilter } from '../atoms/InputFilter';
import { DateRangePicker } from '../molecules/DateRangePicker';
import { SelectFilter } from '../atoms/SelectFilter';
import { ButtonFIlter } from '../atoms/ButtonFIlter';

type FiltersPanelProps = {
    searchDoc: string;
    searchName: string;
    selectedType: string;
    onSearchDocChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function FiltersPanel({
    searchDoc,
    searchName,
    selectedType,
    onSearchDocChange,
    onSearchNameChange,
    onTypeChange,
}: FiltersPanelProps) {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="space-y-6">
                <div>
                    <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                        <Filter className="w-4 h-4" />
                        Filters
                    </h2>
                </div>

                <InputFilter
                    label="Employee Document"
                    value={searchDoc}
                    onChange={onSearchDocChange}
                    placeholder="Search by document..."
                    icon
                />

                <InputFilter
                    label="Employee Name"
                    value={searchName}
                    onChange={onSearchNameChange}
                    placeholder="Search by name..."
                    icon
                />

                <DateRangePicker />

                <SelectFilter
                    label="Type of Leave"
                    value={selectedType}
                    onChange={onTypeChange}
                    options={['All Types', 'Vacation', 'Sick', 'Personal']}
                />

                <ButtonFIlter variant="primary" className="w-full">
                    Apply Filters
                </ButtonFIlter>
            </div>
        </div>
    );
}