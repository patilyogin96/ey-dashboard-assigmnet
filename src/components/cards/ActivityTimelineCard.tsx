import type { ActivityTimelineProps } from "@/types/card.types";
import TimelineItem from "../common/TimelineItem";
import { Card, CardContent } from "../ui/card";
import activityImg from "@/assets/activityTimeline.svg";


const ActivityTimelineCard: React.FC<ActivityTimelineProps> = ({  activities }) => {
  return (
    <Card className="w-full shadow-soft border-gray-100 rounded-md">
      <CardContent className="space-y-5 px-6 pb-6">
        {/* Header Image */}
        <div className="-mx-6 -mt-6 h-72  relative overflow-hidden rounded-t-md">
          <img
            src={activityImg}
            alt="Header"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold text-foreground mb-10">Activity Timeline</h1>

          {/* Timeline Items */}
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <TimelineItem
                key={index}
                activity={activity}
                isLast={index === activities.length - 1}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


export default ActivityTimelineCard


