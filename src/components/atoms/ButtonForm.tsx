interface ButtonFormProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const ButtonForm: React.FC<ButtonFormProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = "w-full py-2 px-4 rounded-md transition-colors";
    const variantStyles = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    };

    return (
        <button
            {...props}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
};