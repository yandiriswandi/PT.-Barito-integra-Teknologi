import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
  <React.StrictMode>
          <Router>
            <App />
          </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
