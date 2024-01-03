import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <App />
  </Router>
);