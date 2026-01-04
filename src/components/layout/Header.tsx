import { Menu, Bell, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import defaultAvatar from "@/assets/defaultAvatar.svg"
import { ICONS } from '@/assets/sidebar-icons/icons';

interface HeaderProps {
  onToggleSidebar: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  isDarkMode,
  onToggleTheme
}) => {
  const isOnline: boolean = true
  return (
    <header className="h-16 bg-background dark:bg-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#3A3541]" /> */}
            <img src={ICONS.searchIcon} alt='search' />
          </div>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2">
        {/* Country Flag */}
        <Button variant="ghost" size="icon">
          <span className="text-xl">🇺🇸</span>
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User Avatar */}
        <Avatar className="ml-2 cursor-pointer">
          <AvatarFallback className="">
            <img src={defaultAvatar} alt='default_avatar' />
          </AvatarFallback>

          {isOnline ? <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
            :           <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
}
        </Avatar>
      </div>
    </header>
  );
};

// rounded-full