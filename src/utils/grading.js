export const getGradeAndPoint = (marks) => {
    if (marks >= 70) return { grade: "A", gradePoint: 4 };
    if (marks >= 60) return { grade: "B", gradePoint: 3 };
    if (marks >= 50) return { grade: "C", gradePoint: 2 };
    if (marks >= 45) return { grade: "D", gradePoint: 1 };
    return { grade: "E", gradePoint: 0 };
};

export const getClassOfDegree = (cgpa) => {
    if (cgpa >= 3.50) return "First Class";
    if (cgpa >= 3.00) return "Second Class Upper";
    if (cgpa >= 2.00) return "Second Class Lower";
    if (cgpa >= 1.00) return "Third Class";
    return "Fail";
};
