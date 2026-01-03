import React from 'react';
import {
  
  ChevronRight,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import materio from "@/assets/materiologo.svg"
import Dashboards from '../common/Dashboards';
import { SectionDivider } from '../common/SectionDivider';
import type { SidebarProps } from '@/types/sidebar';
import { MENU_ITEMS } from '@/data/side-bar';



export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [activeItem, setActiveItem] = React.useState('Analytics');

  return (
    <aside
      className={cn(
        "bg-white dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 flex flex-col text-base text-foreground" ,
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div>
            <img src={materio} alt="materio_logo" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl text-foreground dark:text-white">MATERIO</span>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <Dashboards/>
        <div className='' >
           {MENU_ITEMS.map((section, idx) => (
          <div key={idx} className="mb-6">
            {!isCollapsed && section.section && (
              <SectionDivider title={section.section}  className='mt-7 mb-5' />
            )}
            {section.items.map((item, itemIdx) => (
              <SidebarItem
                key={itemIdx}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                hasSubmenu={item.hasSubmenu}
                active={item.active}
                isCollapsed={isCollapsed}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </div>
        ))}

        </div>
       
      </nav>
    </aside>
  );
};


interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  active?: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  badge,
  hasSubmenu,
  active,
  isCollapsed,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-6 py-3 text-base",
        active
          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-r-3 border-purple-600"
          : "text-foreground dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
      )}
    >
      <Icon className="w-5 h-5 shrink-0" />
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {badge && (
            <Badge variant="destructive" className="text-xs">
              {badge}
            </Badge>
          )}
          {hasSubmenu && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </>
      )}
    </button>
  );
};


export default Sidebar