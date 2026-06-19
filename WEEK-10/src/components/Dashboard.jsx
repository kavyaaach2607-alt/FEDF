import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <div className="card">

        <h2>📖 Librarian Dashboard</h2>

        <Link to="/deletebook">
          Delete Books
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;
