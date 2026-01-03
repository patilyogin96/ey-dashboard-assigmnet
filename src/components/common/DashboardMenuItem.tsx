import { cn } from "@/lib/utils";

import {
    type LucideIcon
} from 'lucide-react';



interface DashboardMenuItemProps {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    isCollapsed: boolean;
    onClick: (label:string) => void;
}

const DashboardMenuItem: React.FC<DashboardMenuItemProps> = ({
    icon,
    label,
    active,
    onClick
}) => {
    return (
        <button
            onClick={()=>onClick(label)}
            className={cn(
                "w-full flex items-center gap-3 px-6 py-3 text-base text-foreground",
                active
                    ? `bg-linear-to-l text-white from-[#9155FD] to-[#C6A7FE] shadow-[0px_4px_8px_-4px_rgba(58,53,65,0.42)] rounded-r-[50px]`
                    : " dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            )}
        >
            {/* <Icon className="w-5 h-5 shrink-0" /> */}
            <span className="border border-[#3a3541de] w-3 h-3 rounded-[50%]" ></span>
            <span className="flex-1 text-left">{label}</span>

        </button>
    );
};


export default DashboardMenuItem