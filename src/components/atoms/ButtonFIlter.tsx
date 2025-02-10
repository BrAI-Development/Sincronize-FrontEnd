type ButtonFIlterProps = {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export function ButtonFIlter({
    variant = 'primary',
    children,
    className = '',
    onClick
}: ButtonFIlterProps) {
    const baseStyles = "flex-1 px-4 py-2 rounded-md transition-colors";
    const variants = {
        primary: "bg-gray-900 text-white hover:bg-gray-800",
        secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}