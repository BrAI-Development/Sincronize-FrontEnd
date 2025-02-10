import { InputForm } from '../atoms/inputForm';
import { SelectForm } from '../atoms/SelectForm';
import { TextAreaForm } from '../atoms/TextAreaForm';

interface FormFieldProps {
    type: 'text' | 'date' | 'select' | 'textarea';
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    options?: { value: string; label: string; }[];
    placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
    type,
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder
}) => {
    switch (type) {
        case 'select':
            return <SelectForm label={label} name={name} value={value} onChange={onChange} options={options} />;
        case 'textarea':
            return <TextAreaForm label={label} name={name} value={value} onChange={onChange} placeholder={placeholder} />;
        default:
            return <InputForm type={type} label={label} name={name} value={value} onChange={onChange} placeholder={placeholder} />;
    }
};