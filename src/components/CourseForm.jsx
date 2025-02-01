/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { toast } from "react-toastify"; // Import toastify

const CourseForm = ({ addCourse }) => {
    const [course, setCourse] = useState("");
    const [marks, setMarks] = useState("");
    const [unit, setUnit] = useState("");
    const { theme } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form inputs and show toast notifications
        if (!course || !marks || !unit) {
            toast.error("All fields are required!"); // Show toast for missing fields
            return;
        }

        if (marks < 0 || marks > 100) {
            toast.error("Marks must be between 0 and 100."); // Show toast for invalid marks
            return;
        }

        addCourse({ course, marks: Number(marks), unit: Number(unit) });
        setCourse("");
        setMarks("");
        setUnit("");
        toast.success("Course added successfully!"); // Success toast
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className={`shadow-md p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center 
                        transition-all ${theme === "dark" ? "bg-[#27272a] border border-gray-700" : "bg-white border border-gray-300"}`}
        >
            <input 
                type="text" 
                placeholder="Course Name" 
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className={`p-2 rounded w-full md:w-auto border transition-all 
                            ${theme === "dark" ? "bg-[#1e1e2e] text-white border-gray-600" : "bg-[#f9f9f9] text-black border-gray-300"}`}
            />
            <input 
                type="number" 
                placeholder="Marks" 
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                className={`p-2 rounded w-full md:w-auto border transition-all 
                            ${theme === "dark" ? "bg-[#1e1e2e] text-white border-gray-600" : "bg-[#f9f9f9] text-black border-gray-300"}`}
            />
            <input 
                type="number" 
                placeholder="Units" 
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className={`p-2 rounded w-full md:w-auto border transition-all 
                            ${theme === "dark" ? "bg-[#1e1e2e] text-white border-gray-600" : "bg-[#f9f9f9] text-black border-gray-300"}`}
            />
            <button 
                type="submit" 
                className={`px-4 py-2 rounded text-white font-medium transition-all 
                            ${theme === "dark" ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"}`}
            >
                Add Course
            </button>
        </form>
    );
};

export default CourseForm;
