interface TimeDisplayProps {
    label: string;
    time: string;
    size?: 'small' | 'large';
}

export function TimeDisplay({ label, time, size = 'small' }: TimeDisplayProps) {
    return (
        <div>
            <div className="text-sm text-gray-600">{label}</div>
            <div className={`${size === 'large' ? 'text-4xl' : 'text-lg'} font-mono text-gray-900`}>
                {time}
            </div>
        </div>
    );
}