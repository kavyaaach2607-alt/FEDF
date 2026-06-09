import { useState } from "react";
import "./App.css";

import StudentContext from "./StudentContext";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      <div className="container">
        <div className="card">

          <h1>🎓 Student Management System</h1>

          <StudentForm />

          <StudentList />

        </div>
      </div>
    </StudentContext.Provider>
  );
}

export default App;