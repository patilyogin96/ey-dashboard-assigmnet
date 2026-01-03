import React from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SidebarItemProps {
  icon: any;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  active?: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
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
          : "text-foreground dark:text-gray-300 hover:bg-bg-hover/4 dark:hover:bg-gray-700/50 hover:rounded-r-[50px]"
      )}
    >
      {/* <Icon className="w-5 h-5 shrink-0" /> */}
      <img
        src={icon}
        width={20}
        height={20}
        loading="lazy"
        alt="Home"
      />

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
