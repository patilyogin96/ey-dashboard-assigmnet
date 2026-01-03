import React from 'react';
import { SectionDivider } from './SectionDivider';
import { SidebarItem } from './SidebarItem';


interface SidebarSectionProps {
  section: any;
  isCollapsed: boolean;
  onItemClick: (label: string) => void;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  section,
  isCollapsed,
  onItemClick
}) => {
  return (
    <div className="mb-6">
      {!isCollapsed && section.section && (
        <SectionDivider title={section.section} className="mt-7 mb-5" />
      )}

      {section.items.map((item: any, idx: number) => (
        <SidebarItem
          key={idx}
          icon={item.icon}
          label={item.label}
          badge={item.badge}
          hasSubmenu={item.hasSubmenu}
          active={item.active}
          isCollapsed={isCollapsed}
          onClick={() => onItemClick(item.label)}
        />
      ))}
    </div>
  );
};
