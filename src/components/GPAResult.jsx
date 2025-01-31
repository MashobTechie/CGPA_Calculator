/* eslint-disable react/prop-types */
import { getClassOfDegree } from "../utils/grading";

const GPAResult = ({ courses }) => {
    if (courses.length === 0) return null;

    const totalUnits = courses.reduce((sum, c) => sum + c.unit, 0);
    const totalGradePoints = courses.reduce((sum, c) => sum + c.gradePoint * c.unit, 0);
    const gpa = (totalGradePoints / totalUnits).toFixed(2);
    const degreeClass = getClassOfDegree(gpa);

    return (
        <div className="mt-6 p-4 bg-gray-100 rounded text-center">
            <h3 className="text-lg md:text-xl font-bold">GPA: {gpa}</h3>
            <h3 className="text-lg md:text-xl">{degreeClass}</h3>
        </div>
    );
};

export default GPAResult;
