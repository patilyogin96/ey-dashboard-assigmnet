
import type { Activity, TimelineItemProps } from '@/types/card.types';



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
      <div className="flex-1 pb-4">
        {/* Header with Title and Date */}
        <div className="flex items-start justify-between mb-2 relative bottom-1.5">
          <h3 className="text-base font-semibold text-foreground">
            {activity.title}
          </h3>
          <span className="text-gray-500 text-xs whitespace-nowrap ml-4">
            {activity.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">{activity.description}</p>

        {
        activity?.metaData && 
        <>

          <div className="flex items-center gap-3">
            <img 
              src={activity.metaData?.attachment} 
              alt={activity.metaData?.name}
              className="w-7 h-7"
            />
            <span className="text-gray-700 font-medium text-sm">{activity.metaData?.name}</span>
          </div>
        </>
        } 
      </div>
    </div>
  );
};



export default TimelineItem