import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MoreVertical, Calendar } from "lucide-react";
import type { MeetingScheduleCardProps } from "@/types/card.types";

const MeetingScheduleCard = ({ meetings }: MeetingScheduleCardProps) => {
  const isComingSoon = true; // toggle this later via props or feature flag

  return (
    <Card className="relative w-full shadow-soft border-gray-100 max-h-120 py-5 overflow-hidden rounded-md">
      
      {/* Overlay */}
      {isComingSoon && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center
                        bg-white/60 backdrop-blur-sm">
          <p className="text-lg font-semibold text-gray-700">
            Coming Soon
          </p>
          <p className="text-sm text-gray-500 mt-1">
            This feature is under development
          </p>
        </div>
      )}

      <CardHeader className="flex flex-row items-center justify-between px-5">
        <CardTitle className="text-xl font-semibold text-foreground">
          Meeting Schedule
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </Button>
      </CardHeader>

      <CardContent
        className={`space-y-5 px-5 overflow-y-auto flex flex-col
          ${isComingSoon ? "pointer-events-none blur-[2px]" : ""}`}
      >
        {meetings.map((meeting) => (
          <div key={meeting.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${meeting.avatarColor} rounded-full
                            flex items-center justify-center overflow-hidden`}
              >
                <svg
                  className="w-7 h-7 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              <div>
                <p className="font-medium text-gray-800 text-sm">
                  {meeting.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {meeting.date} | {meeting.time}
                  </span>
                </div>
              </div>
            </div>

            <span
              className={`px-3 py-1.5 rounded-lg text-[12px] font-medium ${meeting.tagColor}`}
            >
              {meeting.tag}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MeetingScheduleCard;
