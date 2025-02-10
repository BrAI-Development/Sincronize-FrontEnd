import { FormField } from '../molecules/FormField';
import { ButtonForm } from '../atoms/ButtonForm';

interface TimeOffFormProps {
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

export const TimeOffForm: React.FC<TimeOffFormProps> = ({
    formData,
    onSubmit,
    onChange
}) => {
    const leaveTypeOptions = [
        { value: 'vacation', label: 'Vacation' },
        { value: 'sick', label: 'Sick Leave' },
        { value: 'personal', label: 'Personal Leave' },
        { value: 'other', label: 'Other' }
    ];

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <FormField
                type="text"
                label="General Reason"
                name="reason"
                value={formData.reason}
                onChange={onChange}
                placeholder="Enter reason for absence/permission/vacation..."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    type="select"
                    label="Type of Leave"
                    name="leaveType"
                    value={formData.leaveType}
                    onChange={onChange}
                    options={leaveTypeOptions}
                />

                <FormField
                    type="textarea"
                    label="Additional Details"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={onChange}
                    placeholder="Add more details about your leave..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    type="date"
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={onChange}
                />

                <FormField
                    type="date"
                    label="End Date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={onChange}
                />
            </div>

            <ButtonForm type="submit">Submit Request</ButtonForm>
            <ButtonForm type="submit">Volver</ButtonForm>
        </form>
    );
};