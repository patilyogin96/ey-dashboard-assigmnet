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

} from 'lucide-react';

import type { MenuSection } from "@/types/sidebar";


  export const MENU_ITEMS: MenuSection[] = [
 
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
