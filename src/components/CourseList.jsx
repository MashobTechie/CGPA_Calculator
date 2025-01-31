/* eslint-disable react/prop-types */
const CourseList = ({ courses, removeCourse }) => {
    return (
        <div className="mt-4">
            {/* ✅ Desktop View - Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-100 text-center">
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
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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
                    <div key={index} className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="font-bold">{course.course}</span>
                            <span className="text-gray-600">Marks: {course.marks}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Grade: {course.grade}</span>
                            <span className="text-gray-600">Units: {course.unit}</span>
                        </div>
                        <button 
                            onClick={() => removeCourse(index)} 
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-2"
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
