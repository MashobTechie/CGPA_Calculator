import { useState, useEffect } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import GPAResult from "../components/GPAResult";

const Home = () => {
    const [courses, setCourses] = useState(JSON.parse(localStorage.getItem("courses")) || []);

    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses]);

    const addCourse = (course) => setCourses([...courses, course]);
    const removeCourse = (index) => setCourses(courses.filter((_, i) => i !== index));

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">CGPA Calculator</h1>
            
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <CourseForm addCourse={addCourse} />
                <div className="overflow-x-auto">
                    <CourseList courses={courses} removeCourse={removeCourse} />
                </div>
                <GPAResult courses={courses} />
            </div>
        </div>
    );
};

export default Home;
