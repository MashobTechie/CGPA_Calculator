import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Moon, Sun } from "lucide-react"; // Icons for better UX

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button 
            onClick={toggleTheme} 
            className="flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition-all duration-300
                       bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
        >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === "light" ? "Dark" : "Light"}</span>
        </button>
    );
};

export default ThemeToggle;
