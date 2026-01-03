import React from 'react';

import { Header } from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';


interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />
        <main className="flex-1 overflow-y-auto p-6 dark:bg-gray-900">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};