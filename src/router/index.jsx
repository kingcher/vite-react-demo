import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));
const Layout = lazy(() => import("@/components/Layout"));

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
      exact: true,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/main",
      element: <Layout />,
      children: [
        {
          path: "/main/page1",
          element: <div>page1</div>,
        },
        {
          path: "/main/page2",
          element: <div>Users</div>,
        },
        {
          path: "/main/settings",
          element: <div>Settings</div>,
        },
      ],
    },
  ]);
};
