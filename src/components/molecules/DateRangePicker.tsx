import { Calendar } from 'lucide-react';

export function DateRangePicker() {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
            </label>
            <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    Pick a date range
                </span>
            </button>
        </div>
    );
}