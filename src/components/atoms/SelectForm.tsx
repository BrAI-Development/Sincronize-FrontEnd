interface OptionForm {
    value: string;
    label: string;
}

interface SelectFormProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: OptionForm[];
}

export const SelectForm: React.FC<SelectFormProps> = ({ label, options, ...props }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <select
                {...props}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Selecciona {label.toLowerCase()}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};