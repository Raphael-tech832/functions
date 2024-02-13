import { useState } from "react";



let students = [
    {id: 1, name: "John", course: "Full-stack"},
    {id: 2, name: "Mary", course: "Cyber-security"},
    {id: 3, name: "Samuel", course: "Database"},
    {id: 4, name: "Susan", course: "Full-stack"},
    {id: 5, name: "Solio", course: "Full-stack"},
];
const Maps = () => {

let studentList = students.map ((student)=>(
    <h1 key={student.id}>{student.name}, {student.course}</h1>

  ))

return (
    <div>
 {studentList}
    </div>
)
}
export default Maps;