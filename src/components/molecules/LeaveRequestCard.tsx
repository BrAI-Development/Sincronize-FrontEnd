import { Check, X } from 'lucide-react';
import { Button } from '../atoms/Button';
import { LeaveRequest } from '../../utils/types/index';

type LeaveRequestCardProps = {
    request: LeaveRequest;
};

export function LeaveRequestCard({ request }: LeaveRequestCardProps) {
    return (
        <div
            className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 ${request.type === 'Vacation' ? 'border-green-500' : 'border-red-500'
                }`}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {request.employeeName}
                    </h3>
                    <p className="text-sm text-gray-500">Doc: {request.documentId}</p>
                </div>
                {request.type === 'Vacation' ? (
                    <Check className="w-6 h-6 text-green-500" />
                ) : (
                    <X className="w-6 h-6 text-red-500" />
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <p className="text-sm font-medium text-gray-500">Date Range</p>
                    <p className="text-sm text-gray-900">
                        {request.dateRange.start} - {request.dateRange.end}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Type</p>
                    <p className="text-sm text-gray-900">{request.type}</p>
                </div>
                <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-gray-500">Reason</p>
                    <p className="text-sm text-gray-900">{request.reason}</p>
                </div>
            </div>

            <div className="flex gap-3">
                <Button variant="secondary">Reject</Button>
                <Button variant="primary">Approve</Button>
            </div>
        </div>
    );
}