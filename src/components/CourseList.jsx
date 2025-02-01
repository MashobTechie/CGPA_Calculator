/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const CourseList = ({ courses, removeCourse }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="mt-4">
            {/* ✅ Desktop View - Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className={`w-full border-collapse text-sm md:text-base transition-all
                    ${theme === "dark" ? "border border-gray-700 text-white" : "border border-gray-300 text-black"}`}>
                    <thead>
                        <tr className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}>
                            <th className="border p-2">Course</th>
                            <th className="border p-2">Marks</th>
                            <th className="border p-2">Grade</th>
                            <th className="border p-2">Units</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index} className="text-center">
                                <td className="border p-2">{course.course}</td>
                                <td className="border p-2">{course.marks}</td>
                                <td className="border p-2">{course.grade}</td>
                                <td className="border p-2">{course.unit}</td>
                                <td className="border p-2">
                                    <button 
                                        onClick={() => removeCourse(index)} 
                                        className={`px-2 py-1 rounded text-white transition-all 
                                            ${theme === "dark" ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"}`}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ✅ Mobile View - Stackable Cards */}
            <div className="md:hidden space-y-4">
                {courses.map((course, index) => (
                    <div key={index} 
                         className={`p-4 rounded-lg shadow flex flex-col gap-2 transition-all
                         ${theme === "dark" ? "bg-[#1e1e2e] text-white border border-gray-700" : "bg-white text-black border border-gray-300"}`}>
                        <div className="flex justify-between">
                            <span className="font-bold">{course.course}</span>
                            <span className="text-gray-300">Marks: {course.marks}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-300">Grade: {course.grade}</span>
                            <span className="text-gray-300">Units: {course.unit}</span>
                        </div>
                        <button 
                            onClick={() => removeCourse(index)} 
                            className={`px-3 py-1 rounded text-white mt-2 transition-all 
                                ${theme === "dark" ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"}`}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
