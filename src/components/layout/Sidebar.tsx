import React from 'react';
import { cn } from '@/lib/utils';
import materio from "@/assets/materiologo.svg";
import type { SidebarProps } from '@/types/sidebar';
import { SidebarLogo } from '../common/Sidebar/SidebarLogo';
import Dashboards from '../common/Sidebar/Dashboards';

import { MENU_ITEMS } from '@/data/side-bar';
import { SidebarSection } from '../common/Sidebar/SidebarSection';


export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [ setActiveItem] = React.useState('Analytics');

  return (
    <aside
      className={cn(
        "bg-white dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 flex flex-col text-base text-foreground",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <SidebarLogo isCollapsed={isCollapsed} logo={materio} />

      <nav className="flex-1 overflow-y-auto py-4">
        <Dashboards />

        <div>
          {MENU_ITEMS.map((section, idx) => (
            <SidebarSection
              key={idx}
              section={section}
              isCollapsed={isCollapsed}
              onItemClick={setActiveItem}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
