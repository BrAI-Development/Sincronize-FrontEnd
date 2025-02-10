interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const InputForm: React.FC<InputFormProps> = ({ label, ...props }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                {...props}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};