interface BadgeProps {
    variant?: 'default' | 'primary';
    children: React.ReactNode;
}

export function Badge({ variant = 'default', children }: BadgeProps) {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-indigo-100 text-indigo-800'
    };

    return (
        <span className={`px-2 py-1 ${variants[variant]} rounded-full text-sm`}>
            {children}
        </span>
    );
}