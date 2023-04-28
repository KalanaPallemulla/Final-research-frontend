import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Pages
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Prediction from "./Pages/Prediction";
import Article from "./Pages/Article";
import History from "./Pages/History";
import Treatments from "./Pages/Treatments";
import AdminHome from "./admin/Pages/AdminHome";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const CheckLoginRoute = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route element={<CheckLoginRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/history" element={<History />} />
          <Route path="/treatments/:id" element={<Treatments />} />
        </Route>
        <Route path="/article" element={<Article />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin-home" element={<AdminHome />} />
      </Routes>
      {/* <Navigate to="/home" /> */}
    </div>
  );
}

export default App;
