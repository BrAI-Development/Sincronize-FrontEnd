import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconButton } from '../atoms/IconButton';

interface WeekOverviewProps {
    month: string;
    days: number[];
    selectedDay: number;
    onPrevious: () => void;
    onNext: () => void;
}

export function WeekOverview({
    month,
    days,
    selectedDay,
    onPrevious,
    onNext
}: WeekOverviewProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Week Overview</h2>
            <div className="flex items-center justify-between mb-4">
                <IconButton icon={ChevronLeft} onClick={onPrevious} />
                <div className="text-lg font-medium">{month}</div>
                <IconButton icon={ChevronRight} onClick={onNext} />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-sm text-gray-600">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`p-2 ${day === selectedDay
                                ? 'bg-indigo-600 text-white rounded-lg'
                                : 'hover:bg-gray-100 rounded-lg'
                            }`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}