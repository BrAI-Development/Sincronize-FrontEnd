import React, { useState, useEffect } from 'react';
import { CurrentSession } from '../components/organisms/CurrentSession';
import { ActivityTable } from '../components/organisms/ActivityTable';
import { WeekOverview } from '../components/organisms/WeekOverview';
import { formatTime } from '../utils/time';
import { TimeTrackerLayout } from '../components/templates/TImeTrackerLayout';

export function TimerPage() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [activities, setActivities] = useState([
        {
            duration: '07:43:00',
            type: 'Development',
            description: 'Form Template Management System',
            status: 'Active',
            priority: 'High'
        }
    ]);

    useEffect(() => {
        let intervalId: number;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handlePause = () => setIsRunning(false);
    const handleStop = () => {
        setIsRunning(false);
        setTime(0);
    };
    const handleComplete = () => {
        // Add current session to activities
        handleStop();
    };

    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const period = currentHour >= 12 ? 'p.m.' : 'a.m.';
    const displayHour = currentHour % 12 || 12;
    const currentTimeString = `${displayHour}:${String(currentMinute).padStart(2, '0')} ${period}`;

    return (
        <TimeTrackerLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <CurrentSession
                        elapsedTime={formatTime(time)}
                        currentTime={currentTimeString}
                        progress={(time / 3600) * 100}
                        onPause={handlePause}
                        onStop={handleStop}
                        onComplete={handleComplete}
                    />
                    <ActivityTable activities={activities} />
                </div>

                <WeekOverview
                    month="February 2025"
                    days={[27, 28, 29, 30, 31, 1, 2]}
                    selectedDay={30}
                    onPrevious={() => { }}
                    onNext={() => { }}
                />
            </div>
        </TimeTrackerLayout>
    );
}