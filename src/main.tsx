import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navigation from "./shared/ui/Navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer theme="dark" />
  </React.StrictMode>
);
