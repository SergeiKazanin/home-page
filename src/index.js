import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import { lazy } from "react";
import ErrorPage from "./pages/Error-page";
const HomePage = lazy(() => import("./pages/HomePage"));
const MyProjects = lazy(() => import("./pages/MyProjects"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/myproject",
        element: <MyProjects />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
