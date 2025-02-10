import { FiltersPanel } from '../organisms/FiltersPanel';
import { LeaveRequestCard } from '../molecules/LeaveRequestCard';
import { LeaveRequest } from '../../utils/types/index';

type LeaveRequestsTemplateProps = {
    leaveRequests: LeaveRequest[];
    searchDoc: string;
    searchName: string;
    selectedType: string;
    onSearchDocChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function LeaveRequestsTemplate({
    leaveRequests,
    searchDoc,
    searchName,
    selectedType,
    onSearchDocChange,
    onSearchNameChange,
    onTypeChange,
}: LeaveRequestsTemplateProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Leave Requests</h1>
                        <p className="text-gray-600">Review and manage employee leave requests</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                        <FiltersPanel
                            searchDoc={searchDoc}
                            searchName={searchName}
                            selectedType={selectedType}
                            onSearchDocChange={onSearchDocChange}
                            onSearchNameChange={onSearchNameChange}
                            onTypeChange={onTypeChange}
                        />
                    </div>

                    <div className="lg:col-span-3 space-y-4">
                        {leaveRequests.map((request) => (
                            <LeaveRequestCard key={request.id} request={request} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}