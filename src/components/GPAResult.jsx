/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const GpaResult = ({ courses }) => {
    const { theme } = useContext(ThemeContext);
    
    if (courses.length === 0) return null;

    const gradePoints = { A: 4, B: 3, C: 2, D: 1, E: 0 };
    let totalPoints = 0, totalUnits = 0;

    courses.forEach(({ marks, unit }) => {
        let grade = marks >= 70 ? "A" :
                    marks >= 60 ? "B" :
                    marks >= 50 ? "C" :
                    marks >= 45 ? "D" : "E";

        totalPoints += gradePoints[grade] * unit;
        totalUnits += unit;
    });

    const gpa = totalPoints / totalUnits;
    const roundedGpa = gpa.toFixed(2); // ✅ Ensures 2 decimal places
    const degreeClass = gpa >= 3.5 ? "First Class 🎓" :
                        gpa >= 3.0 ? "Second Class Upper" :
                        gpa >= 2.0 ? "Second Class Lower" :
                        gpa >= 1.0 ? "Third Class" : "Fail 😞";

    return (
        <div className={`p-4 rounded-lg mt-4 text-center transition-all
            ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
            <h2 className="text-xl font-bold">Your GPA: {roundedGpa}</h2>
            <p className="text-gray-300">{degreeClass}</p>
        </div>
    );
};

export default GpaResult;
