export const Footer: React.FC = () => {
  return (
    <footer className=" dark:bg-gray-800  px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-base  dark:text-gray-400">
        <div>
        <span className="text-foreground/40" >  © 2022, Made with ❤️ by</span> <span className="font-semibold text-purple-600 dark:text-purple-400"> ThemeSelection</span>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" className="text-purple-600 dark:text-purple-400 transition-colors">
            License
          </a>
            <a href="#" className="text-purple-600 dark:text-purple-400 transition-colors">
            More themes
          </a>
          <a href="#" className="text-purple-600 dark:text-purple-400 transition-colors">
            Documentation
          </a>
          <a href="#" className="text-purple-600 dark:text-purple-400 transition-colors">
            Support
          </a>
        
        </div>
      </div>
    </footer>
  );
};


export default Footer

