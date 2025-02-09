import { Zap } from 'lucide-react';
import { Badge } from '../atoms/Badge';

interface Activity {
    duration: string;
    type: string;
    description: string;
    status: string;
    priority: string;
}

interface ActivityTableProps {
    activities: Activity[];
}

export function ActivityTable({ activities }: ActivityTableProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold">Recent Activities</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-sm text-gray-600">
                            <th className="pb-4">Duration</th>
                            <th className="pb-4">Activity Type</th>
                            <th className="pb-4">Description</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((activity, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-4">{activity.duration}</td>
                                <td className="py-4">
                                    <span className="inline-flex items-center">
                                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                                        {activity.type}
                                    </span>
                                </td>
                                <td className="py-4">{activity.description}</td>
                                <td className="py-4">
                                    <Badge>{activity.status}</Badge>
                                </td>
                                <td className="py-4">
                                    <Badge variant="primary">{activity.priority}</Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}