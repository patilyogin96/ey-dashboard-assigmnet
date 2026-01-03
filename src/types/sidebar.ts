

export interface SidebarProps {
  isCollapsed: boolean;
}

export interface MenuItem {
  icon: any;
  label: string;
  badge?: string;
  hasSubmenu?: boolean;
  active?: boolean;
}

export interface MenuSection {
  section?: string;
  items: MenuItem[];
}