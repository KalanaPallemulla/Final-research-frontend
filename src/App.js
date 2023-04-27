import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Pages
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Prediction from "./Pages/Prediction";
import Article from "./Pages/Article";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

const CheckLoginRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
};

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route element={<CheckLoginRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/article" element={<Article />} />
        </Route>
      </Routes>
      {/* <Navigate to="/home" /> */}
    </div>
  );
}

export default App;
