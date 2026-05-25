// index.js
// Entry point — React mounts the App component into the HTML root element

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mount the React app into the <div id="root"> in public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
