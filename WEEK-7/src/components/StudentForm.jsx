import { useState, useContext } from "react";
import StudentContext from "../StudentContext";

function StudentForm() {
  const { students, setStudents } = useContext(StudentContext);

  const [student, setStudent] = useState({
    rollNo: "",
    name: "",
    email: "",
    branch: "",
  });

  const addStudent = () => {
    if (
      !student.rollNo ||
      !student.name ||
      !student.email ||
      !student.branch
    ) {
      return;
    }

    setStudents([...students, student]);

    setStudent({
      rollNo: "",
      name: "",
      email: "",
      branch: "",
    });
  };

  return (
    <div className="form-box">
      <h3>Add Student</h3>

      <div className="form-grid">

        <input
          type="text"
          placeholder="Roll Number"
          value={student.rollNo}
          onChange={(e) =>
            setStudent({
              ...student,
              rollNo: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Student Name"
          value={student.name}
          onChange={(e) =>
            setStudent({
              ...student,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={(e) =>
            setStudent({
              ...student,
              email: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Branch"
          value={student.branch}
          onChange={(e) =>
            setStudent({
              ...student,
              branch: e.target.value,
            })
          }
        />

      </div>

      <button onClick={addStudent}>
        ➕ Add Student
      </button>
    </div>
  );
}

export default StudentForm;