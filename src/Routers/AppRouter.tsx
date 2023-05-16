import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../components/pages/HomePage/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"/robots"} replace />,
      },
      {
        path: "/robots",
        element: <HomePage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
