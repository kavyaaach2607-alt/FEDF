import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="card">
          <nav>
            <Link to="/">📖 Home</Link>
            <span>|</span>
            <Link to="/addbook">Add Book</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addbook" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
