import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Dashboard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";
import Reports from "../Pages/Reports";
import Security from "../Pages/Security";
import UserManagement from "../Pages/UserManagement";
import Home from "../Component/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/analytics",
    Component: Analytics,
  },
  {
    path: "/reports",
    Component: Reports,
  },
  {
    path: "/security",
    Component: Security,
  },
  {
    path: "/users",
    Component: UserManagement,
  },
  {
    path: "/reports",
    Component: Reports,
  },
]);
