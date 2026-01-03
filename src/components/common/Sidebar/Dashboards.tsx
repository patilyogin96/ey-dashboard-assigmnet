import { cn } from '@/lib/utils'
import { Badge } from '../../ui/badge'
import {
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import DashboardMenuItem from './DashboardMenuItem';
import { useState } from 'react';
import { ICONS } from '@/assets/sidebar-icons/icons';

const Dashboards = () => {

    const [active, setActiveItem] = useState(true)
    const [selectedDashboard, setSelectedDashboard] = useState<string>("CRM")
    const label = "Dashboards"
    const isCollapsed = false

    const badge = "New"
    const dashboardMenuItems = [
        { label: 'CRM' },
        { label: 'Analytics', active: true },
        { label: 'eCommerce' },


    ]
    const handleToogleDashboard = () => {
        setActiveItem((prev) => !prev)
    }

    const handleDashboardTypeSelect = (label: string) => {
        setSelectedDashboard(label)
    }

    return (
        <div className='' >
            <button
                onClick={handleToogleDashboard}
                className={cn(
                    "w-full flex items-center gap-3 px-6 py-3 text-base transition-colors bg-[#3a35410a] rounded-r-[50px] text-foreground"
                )}
            >
                <img
                    src={ICONS.icon}
                    width={20}
                    height={20}
                    loading="lazy"
                    alt="Home"
                />

                {!isCollapsed && (
                    <>
                        <span className="flex-1 text-left">{label}</span>
                        <Badge variant="destructive" className="text-xs">
                            {badge}
                        </Badge>

                        {

                            active ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronUp className="w-4 h-4 text-gray-400" />
                        }

                    </>
                )}
            </button>
            {
                active && dashboardMenuItems.map((item, idx) => (
                    <DashboardMenuItem
                        key={idx}
                        label={item.label}
                        active={selectedDashboard === item.label}
                        isCollapsed={isCollapsed}
                        onClick={handleDashboardTypeSelect}
                    />
                ))
            }

        </div>



    )
}

export default Dashboards