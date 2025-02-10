import React, { useState } from 'react';

import { TimeOffTemplate } from '../components/templates/TimeOffTemplate';

export const TimeOffPage: React.FC = () => {
    const [formData, setFormData] = useState({
        reason: '',
        leaveType: '',
        additionalDetails: '',
        startDate: '',
        endDate: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <TimeOffTemplate
            formData={formData}
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    );
};