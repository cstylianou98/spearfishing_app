import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);