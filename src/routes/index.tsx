import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { RequireAuth } from "./ProtectedRoutes";
import PageError from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <PageError />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <PageError />,
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    errorElement: <PageError />,
  },
]);

export default router;
