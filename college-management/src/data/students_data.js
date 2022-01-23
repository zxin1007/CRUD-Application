let students = [
    {
        id: 1,
        firstName: "Z",
        lastName: "z",
        email: "a@gmail.com",
        image: "No image available",
        gpa: 0.0,
        campus: "A"
    },
    {
        id: 2,
        firstName: "B",
        lastName: "b",
        email: "b@gmail.com",
        image: "No image available",
        gpa: 0.1,
        campus: "B"
    },
    {
        id: 3,
        firstName: "C",
        lastName: "c",
        email: "c@gmail.com",
        image: "No image available",
        gpa: 0.0,
        campus: "C"
    },
    {
        id: 4,
        firstName: "D",
        lastName: "d",
        email: "d@gmail.com",
        image: "No image available",
        gpa: 0.0,
        campus: "D"
    },
    {
        id: 5,
        firstName: "E",
        lastName: "e",
        email: "e@gmail.com",
        image: "No image available",
        gpa: 0.0,
        campus: "E"
    }
];

export function getStudents () {
    return students;
}

export function getStudent(id) {
    return students.find(
        student => student.id === id
    );
}

export function deleteStudent(id) {
    students = students.filter(
        student => student.id !== id
    );
}