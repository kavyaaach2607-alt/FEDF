import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BookDeletion from "./components/BookDeletion";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={
            <Login
              setIsLoggedIn={
                setIsLoggedIn
              }
            />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isLoggedIn={
                isLoggedIn
              }
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Delete Books */}
        <Route
          path="/deletebook"
          element={
            <ProtectedRoute
              isLoggedIn={
                isLoggedIn
              }
            >
              <BookDeletion />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;