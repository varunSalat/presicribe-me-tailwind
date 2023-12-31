import { Navigate, Outlet } from "react-router-dom";

const DoctorProtectedRoute = () => {
  const doctorLocalStorageData = localStorage.getItem("doctor");

  if (doctorLocalStorageData) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default DoctorProtectedRoute;
