// App.jsx
// Root component — manages which page is shown (Home or Dashboard)
// and handles dark mode state shared across the whole app

import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

function App() {
  // "home" | "dashboard" — which page to show
  const [page, setPage] = useState("home");

  // Dark mode: read saved preference from localStorage (persists across reloads)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Apply/remove the [data-theme="dark"] attribute on <body>
  // whenever darkMode changes — CSS variables pick this up automatically
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode); // persist preference
  }, [darkMode]);

  // Toggle dark mode
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <>
      {page === "home" ? (
        <Home
          onGetStarted={() => setPage("dashboard")}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />
      ) : (
        <Dashboard
          onGoBack={() => setPage("home")}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />
      )}
    </>
  );
}

export default App;
