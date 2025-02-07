import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  { path: "/a", element: <Home /> },
  { path: "/b", element: <About /> },
  { path: "/c", element: <Contact /> },
  { path: "*", element: <ErrorPage /> }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);