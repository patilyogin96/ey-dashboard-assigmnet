import { cn } from "@/lib/utils";


interface DashboardMenuItemProps {
    label: string;
    active?: boolean;
    isCollapsed: boolean;
    onClick: (label:string) => void;
}

const DashboardMenuItem: React.FC<DashboardMenuItemProps> = ({
    label,
    active,
    onClick
}) => {
    return (
        <button
            onClick={()=>onClick(label)}
            className={cn(
                "w-full flex items-center gap-3 px-6 py-3 text-base text-foreground rounded-r-[50px]",
                active
                    ? `bg-linear-to-l text-white from-[#9155FD] to-[#C6A7FE] shadow-[0px_4px_8px_-4px_rgba(58,53,65,0.42)] `
                    : " dark:text-gray-300 hover:bg-bg-hover/4 dark:hover:bg-gray-700/50"
            )}
        >
            {/* <Icon className="w-5 h-5 shrink-0" /> */}
            <span className={`border-[1.5px]  w-3.5 h-3.5 rounded-[50%] ${active?"border-background":'border-[#3a3541de]'}`} ></span>
            <span className="flex-1 text-left">{label}</span>

        </button>
    );
};


export default DashboardMenuItem