import type { MenuSection } from "@/types/sidebar";
import { ICONS } from '@/assets/sidebar-icons/icons';


export const MENU_ITEMS: MenuSection[] = [

  {
    section: 'APPS & PAGES',
    items: [
      { icon: ICONS.mailOutline, label: 'Email' },
      { icon: ICONS.chatBubbleOutline, label: 'Chat' },
      { icon: ICONS.calendarToday, label: 'Calendar' },
      { icon: ICONS.contentCopy, label: 'Invoice', hasSubmenu: true },
      { icon: ICONS.user, label: 'User', hasSubmenu: true },
      { icon: ICONS.lockOpen, label: 'Roles & Permissi...', hasSubmenu: true },
      { icon: ICONS.contentCopy, label: 'Pages', hasSubmenu: true },
      { icon: ICONS.contentCopy, label: 'Dialog Examples' },
    ]
  },
  {
    section: 'USER INTERFACE',
    items: [
      { icon: ICONS.userAlt, label: 'Typography' },
      { icon: ICONS.starBorder, label: 'Icons' },
      { icon: ICONS.creditCard, label: 'Cards', hasSubmenu: true },
      { icon: ICONS.icon1, label: 'Components', hasSubmenu: true },
    ]
  },
  {
    section: 'FORMS & TABLES',
    items: [
      { icon: ICONS.formElements, label: 'Form Elements', hasSubmenu: true },
      { icon: ICONS.laptopChromebook, label: 'Form Layout' },
      { icon: ICONS.formValidation, label: 'Form Validation' },
      { icon: ICONS.moreHoriz, label: 'Form Wizard' },
      { icon: ICONS.multiGridTab, label: 'Table' },
      { icon: ICONS.multiGridTab, label: 'Mui DataGrid' }
    ]
  },
  {
    section: 'CHARTS & MISC',
    items: [
      { icon: ICONS.pieChartOutline, label: 'Charts', hasSubmenu: true },
      { icon: ICONS.moreHoriz, label: 'Others', hasSubmenu: true }
    ]
  }

];
