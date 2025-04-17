import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./containers/Home/Home";
import AuthPage from "./containers/AuthPage";

// Auth check util
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route: Home */}
        <Route path="/" element={<Home />} />

        {/* Protected Route: Auth (only if NOT logged in) */}
        <Route
          path="/auth"
          element={
            isAuthenticated() ? <Navigate to="/" replace /> : <AuthPage />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
