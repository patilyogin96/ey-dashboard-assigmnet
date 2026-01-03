import {
  type LucideIcon
} from 'lucide-react';

export interface SidebarProps {
  isCollapsed: boolean;
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  active?: boolean;
}

export interface MenuSection {
  section?: string;
  items: MenuItem[];
}