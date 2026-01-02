import React from 'react';
import { 
  Home, 
  ShoppingCart, 
  BarChart3, 
  Mail, 
  MessageSquare, 
  Calendar, 
  FileText, 
  User, 
  Lock, 
  FileCode, 
  ChevronRight,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  isCollapsed: boolean;
}

interface MenuItem {
  icon: LucideIcon;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  active?: boolean;
}

interface MenuSection {
  section?: string;
  items: MenuItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [activeItem, setActiveItem] = React.useState('Analytics');

  const menuItems: MenuSection[] = [
    { 
      section: 'MAIN',
      items: [
        { icon: Home, label: 'Dashboards', badge: 'New', hasSubmenu: true },
        { icon: ShoppingCart, label: 'CRM' },
        { icon: BarChart3, label: 'Analytics', active: true },
        { icon: ShoppingCart, label: 'eCommerce' },
      ]
    },
    {
      section: 'APPS & PAGES',
      items: [
        { icon: Mail, label: 'Email' },
        { icon: MessageSquare, label: 'Chat' },
        { icon: Calendar, label: 'Calendar' },
        { icon: FileText, label: 'Invoice', hasSubmenu: true },
        { icon: User, label: 'User', hasSubmenu: true },
        { icon: Lock, label: 'Roles & Permissi...', hasSubmenu: true },
        { icon: FileCode, label: 'Pages', hasSubmenu: true },
        { icon: FileCode, label: 'Dialog Examples' },
      ]
    },
    {
      section: 'USER INTERFACE',
      items: [
        { icon: FileCode, label: 'Typography' },
        { icon: FileCode, label: 'Icons' },
        { icon: FileCode, label: 'Cards', hasSubmenu: true },
        { icon: FileCode, label: 'Components', hasSubmenu: true },
      ]
    },
    {
      section: 'FORMS & TABLES',
      items: []
    }
  ];

  return (
    <aside 
      className={cn(
        "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl text-gray-800 dark:text-white">MATERIO</span>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            {!isCollapsed && section.section && (
              <div className="px-6 mb-2">
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  {section.section}
                </span>
              </div>
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
      </nav>
    </aside>
  );
};

// src/components/layout/SidebarItem.tsx
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
        "w-full flex items-center gap-3 px-6 py-3 text-sm transition-colors",
        active
          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-r-3 border-purple-600"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
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