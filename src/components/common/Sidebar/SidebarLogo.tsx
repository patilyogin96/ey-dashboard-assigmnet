import React from 'react';

interface SidebarLogoProps {
  isCollapsed: boolean;
  logo: string;
}

export const SidebarLogo: React.FC<SidebarLogoProps> = ({ isCollapsed, logo }) => {
  return (
    <div className="h-16 flex items-center px-6 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <img src={logo} alt="materio_logo" />
        {!isCollapsed && (
          <span className="font-bold text-xl text-foreground dark:text-white">
            MATERIO
          </span>
        )}
      </div>
    </div>
  );
};
