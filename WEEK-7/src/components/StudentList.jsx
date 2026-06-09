import { useContext } from "react";
import StudentContext from "../StudentContext";

function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div className="student-list">

      <h3>Student List</h3>

      {students.map((student, index) => (
        <div className="student-card" key={index}>

          <div className="student-name">
            {student.name}
          </div>

          <div className="student-detail">
            <span>Roll No</span>
            {student.rollNo}
          </div>

          <div className="student-detail">
            <span>Email</span>
            {student.email}
          </div>

          <div className="student-detail">
            <span>Branch</span>
            {student.branch}
          </div>

        </div>
      ))}

    </div>
  );
}

export default StudentList;