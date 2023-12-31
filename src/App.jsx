import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CreateAccount, LoginPage } from "./pages";
import { DoctorDashboardPage } from "./pages/doctor";
import { DoctorLayout } from "./layouts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeDoctorTheme } from "./store/features/doctorModuleSlices/doctorGeneralSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />
      <Route path="create-account" element={<CreateAccount />} />
      {/* ===DOCTOR ROUTES=== */}
      <Route path="doctor" element={<DoctorLayout />}>
        <Route index element={<DoctorDashboardPage />} />
      </Route>
    </Route>,
  ),
);

function App() {
  const dispatch = useDispatch();
  // !THEMING

  const localTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (localTheme === "light") {
      dispatch(changeDoctorTheme(true));
    } else {
      dispatch(changeDoctorTheme(false));
    }
  }, [localTheme, dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
