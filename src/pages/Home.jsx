// pages/Home.jsx
// This is the Welcome / Landing page shown when the app first loads

import { FiArrowRight, FiCheckCircle, FiSun, FiMoon } from "react-icons/fi";
import {
  MdOutlineFilterList,
  MdOutlineSearch,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import "../styles/Home.css";

// Features listed on the landing card
const FEATURES = [
  { icon: <FiCheckCircle />, label: "Priority Levels" },
  { icon: <MdOutlineSearch />, label: "Search Tasks" },
  { icon: <MdOutlineFilterList />, label: "Filter & Sort" },
  { icon: <MdOutlineNotificationsNone />, label: "Due Dates" },
];

function Home({ onGetStarted, darkMode, onToggleTheme }) {
  return (
    <div className="home-page">

      {/* ─── Dark Mode Toggle (top-right corner) ─── */}
      <button className="home-theme-toggle" onClick={onToggleTheme}>
        {darkMode ? <FiSun /> : <FiMoon />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* ─── Central Welcome Card ─── */}
      <div className="home-card">

        {/* App icon */}
        <div className="home-icon">✓</div>

        {/* App title */}
        <h1 className="home-title">
          Focus.<br />
          <span>Get it done.</span>
        </h1>

        {/* Tagline */}
        <p className="home-subtitle">
          A simple, beautiful task manager to keep your day organised.
          Add tasks, set priorities, and track what matters most.
        </p>

        {/* Feature pills */}
        <div className="home-features">
          {FEATURES.map((f) => (
            <div className="feature-pill" key={f.label}>
              {f.icon} {f.label}
            </div>
          ))}
        </div>

        {/* CTA button — triggers page switch in App.jsx */}
        <button className="btn-get-started" onClick={onGetStarted}>
          Get Started <FiArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Home;
