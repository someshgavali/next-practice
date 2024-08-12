import Link from "next/link";
import React from "react";

const students = ["Somesh", "Tejas", "Mahesh", "Athrav", "Ankit"];

const StudentListPage = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Link href={`/studentlist/${student}`}>{student}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;
