interface AvatarProps {
    name: string;
    className?: string;
}

export function Avatar({ name, className = '' }: AvatarProps) {
    return (
        <div className={`w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium ${className}`}>
            {name.charAt(0).toUpperCase()}
        </div>
    );
}