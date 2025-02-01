import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import GPAResult from "../components/GPAResult";
import ThemeToggle from "../components/ThemeToggle"; // Import ThemeToggle

const Home = () => {
    const [courses, setCourses] = useState(() => JSON.parse(localStorage.getItem("courses")) ?? []);
    const { theme } = useContext(ThemeContext); // Get current theme

    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses]);

    const addCourse = (course) => setCourses([...courses, course]);
    const removeCourse = (index) => setCourses(courses.filter((_, i) => i !== index));

    return (
        <div className={`min-h-screen transition-all ${theme === "dark" ? "bg-[#1e1e2e] text-[#e5e5e5]" : "bg-[#f9f9f9] text-[#333]"}`}>
            <div className="max-w-3xl mx-auto p-4 md:p-6">
                
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold">CGPA Calculator</h1>
                    <ThemeToggle /> {/* Dark/Light Mode Toggle */}
                </div>

                {/* Main Content */}
                <div className={`p-5 md:p-6 rounded-lg shadow-lg transition-all 
                                ${theme === "dark" ? "bg-[#27272a] border border-gray-700" : "bg-white border border-gray-300"}`}>
                    <CourseForm addCourse={addCourse} />
                    <div className="overflow-x-auto">
                        <CourseList courses={courses} removeCourse={removeCourse} />
                    </div>
                    <GPAResult courses={courses} />
                </div>
            </div>
        </div>
    );
};

export default Home;
