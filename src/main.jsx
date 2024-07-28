import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/style.css";
import NotesApp from "./components/NotesApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
