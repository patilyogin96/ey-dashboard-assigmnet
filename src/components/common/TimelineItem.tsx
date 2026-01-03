
import type { Activity, TimelineItemProps } from '@/types/card.types';
import { FileText } from 'lucide-react';



const TimelineItem: React.FC<TimelineItemProps> = ({ activity, isLast }) => {
  const dotColors: Record<Activity['dotColor'], string> = {
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500'
  };

  return (
    <div className="relative flex gap-6">
      {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${dotColors[activity.dotColor]} shrink-0`}></div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        {/* Header with Title and Date */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800">
            {activity.title}
          </h3>
          <span className="text-gray-400 text-sm whitespace-nowrap ml-4">
            {activity.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{activity.description}</p>

        {/* Attachments/Additional Content */}
        {activity.attachment && (
          <div className="flex items-center gap-3 text-gray-700">
            <FileText className="w-5 h-5 text-red-500" />
            <span className="font-medium">{activity.attachment}</span>
          </div>
        )}

        {activity.client && (
          <div className="flex items-center gap-3">
            <img 
              src={activity.client.avatar} 
              alt={activity.client.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700 font-medium">{activity.client.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};



export default TimelineItem