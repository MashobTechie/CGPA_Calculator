/* eslint-disable react/prop-types */
import { useState } from "react";
import { getGradeAndPoint } from "../utils/grading";

const CourseForm = ({ addCourse }) => {
    const [course, setCourse] = useState("");
    const [marks, setMarks] = useState("");
    const [unit, setUnit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!course || !marks || !unit) return;

        const { grade, gradePoint } = getGradeAndPoint(Number(marks));

        addCourse({ course, marks: Number(marks), grade, gradePoint, unit: Number(unit) });

        setCourse("");
        setMarks("");
        setUnit("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4">
                <input 
                    type="text" 
                    placeholder="Course Name" 
                    value={course} 
                    onChange={(e) => setCourse(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/3"
                />
                <input 
                    type="number" 
                    placeholder="Marks" 
                    value={marks} 
                    onChange={(e) => setMarks(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/4"
                />
                <input 
                    type="number" 
                    placeholder="Unit" 
                    value={unit} 
                    onChange={(e) => setUnit(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/4"
                />
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">
                Add Course
            </button>
        </form>
    );
};

export default CourseForm;
