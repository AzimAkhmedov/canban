import React from "react";
import "./App.scss";
import { Navigation } from "./components";
import { Dashboard } from "./pages";
import AppRouter from "./routes";

function App() {
  return (
    <>
      <Navigation />
      <AppRouter />
    </>
  );
}

export default App;
