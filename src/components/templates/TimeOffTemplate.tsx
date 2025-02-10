import { TimeOffForm } from '../organisms/TimeOffForm';

interface TimeOffTemplateProps {
    formData: {
        reason: string;
        leaveType: string;
        additionalDetails: string;
        startDate: string;
        endDate: string;
    };
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<any>) => void;
}

export const TimeOffTemplate: React.FC<TimeOffTemplateProps> = ({
    formData,
    onSubmit,
    onChange
}) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
                <h1 className="text-2xl font-semibold text-center mb-2">Request Time Off</h1>
                <p className="text-gray-600 text-center text-sm mb-6">
                    Submit your leave, permission or disability request
                </p>

                <TimeOffForm
                    formData={formData}
                    onSubmit={onSubmit}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};