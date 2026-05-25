// pages/Dashboard.jsx
// The main app page where all task management happens


import { useState, useEffect, useMemo } from "react";
import {
  FiArrowLeft, FiSun, FiMoon, FiSearch,
  FiPlus, FiX, FiCheckSquare, FiClock, FiList,
  FiAlertCircle,
} from "react-icons/fi";
import { BsClipboard2Check } from "react-icons/bs";

import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

import "../styles/Dashboard.css";
import "../styles/components.css";

function Dashboard({ onGoBack, darkMode, onToggleTheme }) {
  // ─── State ─────────────────────────────────────────────────────
  const [tasks, setTasks]           = useState([]);      // All tasks from API
  const [loading, setLoading]       = useState(true);    // Initial fetch loading
  const [formLoading, setFormLoading] = useState(false); // Submit button loading
  const [error, setError]           = useState(null);    // Error message string
  const [showForm, setShowForm]     = useState(false);   // Toggle Add Task form
  const [editTask, setEditTask]     = useState(null);    // Task being edited
  const [searchQuery, setSearchQuery] = useState("");    // Search bar value

  // ─── Fetch tasks on mount ───────────────────────────────────────
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getAllTasks();
      setTasks(res.data); // Assume API returns array of tasks
    } catch (err) {
      setError("Could not connect to server. Is your backend running on port 5000?");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ─── Add or Update Task ─────────────────────────────────────────
  const handleFormSubmit = async (formData) => {
  try {
    setFormLoading(true);
    setError(null);

    if (editTask) {

  await updateTask(editTask.id, {
  title: formData.title,
  description: formData.description,
  priority: formData.priority,
  due_date: formData.dueDate,
  completed: editTask.completed,
});

      setEditTask(null);

    } else {

      await createTask({
  title: formData.title,
  description: formData.description,
  priority: formData.priority,
  due_date: formData.dueDate,
  completed: false,
});

      setShowForm(false);
    }

    // VERY IMPORTANT
    await fetchTasks();

  } catch (err) {
    setError("Failed to save task.");
    console.log(err);
  } finally {
    setFormLoading(false);
  }
};

  // ─── Toggle completed / pending ────────────────────────────────
const handleToggleComplete = async (task) => {

  try {

    await updateTask(task.id, {
      completed: !task.completed,
    });

    await fetchTasks();

  } catch (err) {

    console.log(err);

    setError("Failed to update task.");
  }
};

const handleDelete = async (id) => {

  try {

    await deleteTask(id);

    await fetchTasks();

  } catch (err) {

    console.log(err);

    setError("Failed to delete task.");
  }
};


// EDIT TASK
const handleEdit = (task) => {
  setEditTask(task);

  setShowForm(false);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


// CANCEL EDIT
const handleCancelEdit = () => {
  setEditTask(null);
};
  // ─── Filter tasks by search query ───────────────────────────────
  // useMemo only re-computes when tasks or searchQuery changes
  const filteredTasks = useMemo(() => {
    if (!searchQuery.trim()) return tasks;
    const q = searchQuery.toLowerCase();
    return tasks.filter(
      (t) =>
        t.title?.toLowerCase().includes(q) ||
        t.description?.toLowerCase().includes(q) ||
        t.priority?.toLowerCase().includes(q)
    );
  }, [tasks, searchQuery]);

  // Separate filtered tasks into pending and completed
  const pendingTasks   = filteredTasks.filter((t) => !t.completed);
  const completedTasks = filteredTasks.filter((t) => t.completed);

  // ─── Today's date string for the header ────────────────────────
  const todayStr = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric",
  });

  // ─── Render ─────────────────────────────────────────────────────
  return (
    <div className="dashboard">
        <div className="particles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

      {/* ─── Navbar ─── */}
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-brand-icon">✓</div>
          TaskFlow
        </div>

        <div className="navbar-actions">
          {/* Dark mode toggle switch */}
          <div
            className={`theme-toggle ${darkMode ? "dark" : ""}`}
            onClick={onToggleTheme}
            title="Toggle dark mode"
            role="switch"
            aria-checked={darkMode}
            tabIndex={0}
          >
            <div className="theme-toggle-circle">
              {darkMode ? <FiMoon size={10} /> : <FiSun size={10} />}
            </div>
          </div>

          {/* Back to Home */}
          <button className="btn-back" onClick={onGoBack}>
            <FiArrowLeft /> Home
          </button>
        </div>
      </nav>

      {/* ─── Main Content ─── */}
      <main className="dashboard-main">

        {/* Page Title */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">My Tasks</h1>
          <p className="dashboard-date">{todayStr}</p>
        </div>

        {/* ─── Stats Cards ─── */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon total"><FiList /></div>
            <div className="stat-info">
              <div className="stat-number">{tasks.length}</div>
              <div className="stat-label">Total Tasks</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon pending"><FiClock /></div>
            <div className="stat-info">
              <div className="stat-number">{tasks.filter(t => !t.completed).length}</div>
              <div className="stat-label">Pending</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon done"><FiCheckSquare /></div>
            <div className="stat-info">
              <div className="stat-number">{tasks.filter(t => t.completed).length}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>
        </div>

        {/* ─── Search Bar ─── */}
        <div className="search-bar">
          <FiSearch />
          <input
            className="search-input"
            type="text"
            placeholder="Search tasks by title, description or priority..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* ─── Error Banner ─── */}
        {error && (
          <div className="error-banner">
            <FiAlertCircle /> {error}
          </div>
        )}

        {/* ─── Edit Form (shows when editTask is set) ─── */}
        {editTask && (
          <TaskForm
            onSubmit={handleFormSubmit}
            editTask={editTask}
            onCancelEdit={handleCancelEdit}
            loading={formLoading}
          />
        )}

        {/* ─── Add Task Toggle Button ─── */}
        {!editTask && (
          <button
            className="btn-add-task"
            onClick={() => setShowForm((prev) => !prev)}
          >
            {showForm ? <><FiX /> Cancel</> : <><FiPlus /> Add Task</>}
          </button>
        )}

        {/* ─── Add Task Form (shown/hidden via showForm state) ─── */}
        {showForm && !editTask && (
          <TaskForm
            onSubmit={handleFormSubmit}
            editTask={null}
            onCancelEdit={() => setShowForm(false)}
            loading={formLoading}
          />
        )}

        {/* ─── Loading State ─── */}
        {loading ? (
          <div className="loading-container">
            <div className="spinner" />
            Loading your tasks...
          </div>
        ) : (
          <>
            {/* ── Pending Tasks Section ── */}
            <div className="section-header">
              <h2 className="section-title">
                <FiClock />
                Pending Tasks
                <span className="section-badge badge-pending">{pendingTasks.length}</span>
              </h2>
            </div>

            {pendingTasks.length === 0 ? (
              <div className="empty-state">
                <BsClipboard2Check />
                <p>{searchQuery ? "No pending tasks match your search." : "No pending tasks! Add one above."}</p>
              </div>
            ) : (
              <div className="task-list">
                {pendingTasks.map((task) => (
                  <TaskCard
                    key={task._id || task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}

            {/* ── Completed Tasks Section ── */}
            <div className="section-header">
              <h2 className="section-title">
                <FiCheckSquare />
                Completed Tasks
                <span className="section-badge badge-done">{completedTasks.length}</span>
              </h2>
            </div>

            {completedTasks.length === 0 ? (
              <div className="empty-state">
                <BsClipboard2Check />
                <p>{searchQuery ? "No completed tasks match your search." : "No completed tasks yet."}</p>
              </div>
            ) : (
              <div className="task-list">
                {completedTasks.map((task) => (
                  <TaskCard
                    key={task._id || task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
