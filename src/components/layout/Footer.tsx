export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600 dark:text-gray-400">
        <div>
          © 2024 <span className="font-semibold text-purple-600 dark:text-purple-400">Materio</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Documentation
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            License
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer