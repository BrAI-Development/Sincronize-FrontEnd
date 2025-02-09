import { Timer, Pause, StopCircle, Zap } from 'lucide-react';
import { TimeDisplay } from '../molecules/TimeDisplay';
import { GeneralButton } from '../atoms/GeneralButton';
import { ProgressBar } from '../molecules/ProgressBar';

interface CurrentSessionProps {
    elapsedTime: string;
    currentTime: string;
    progress: number;
    onPause: () => void;
    onStop: () => void;
    onComplete: () => void;
}

export function CurrentSession({
    elapsedTime,
    currentTime,
    progress,
    onPause,
    onStop,
    onComplete
}: CurrentSessionProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
                <Timer className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold">Current Session</h2>
            </div>

            <div className="space-y-4">
                <TimeDisplay label="Elapsed Time" time={elapsedTime} size="large" />
                <TimeDisplay label="Current Time" time={currentTime} />
                <ProgressBar progress={progress} />

                <div className="grid grid-cols-3 gap-4">
                    <GeneralButton icon={Pause} onClick={onPause}>Pause</GeneralButton>
                    <GeneralButton icon={StopCircle} onClick={onStop}>Stop</GeneralButton>
                    <GeneralButton variant="primary" icon={Zap} onClick={onComplete}>Complete</GeneralButton>
                </div>
            </div>
        </div>
    );
}