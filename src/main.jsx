import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Cart from "./views/Cart/Cart";
const router = createBrowserRouter(
 [ { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> }]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
