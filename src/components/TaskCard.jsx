import {
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiCalendar,
} from "react-icons/fi";

import "../styles/components.css";

function formatDate(dateStr) {

  if (!dateStr) return null;

  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function isOverdue(due_date, completed) {

  if (!due_date || completed) return false;

  return new Date(due_date) < new Date();
}

function TaskCard({
  task,
  onToggleComplete,
  onEdit,
  onDelete,
}) {

  const overdue = isOverdue(
    task.due_date,
    task.completed
  );

  return (

    <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >

      {/* Floating Glow */}
      <div className="task-particle"></div>

      {/* Checkbox */}
      <div
        className={`task-checkbox ${
          task.completed ? "checked" : ""
        }`}
        onClick={() => onToggleComplete(task)}
      >
        {task.completed && <FiCheck />}
      </div>

      {/* Content */}
      <div className="task-content">

        <p
          className="task-title"
        >
          {task.title}
        </p>

        {task.description && (
          <p
            className="task-description"
          >
            {task.description}
          </p>
        )}

        <div className="task-meta">

          <span
            className={`priority-badge priority-${task.priority}`}
          >
            {task.priority}
          </span>

          {task.due_date && (

            <span
              className={`task-date ${
                overdue ? "overdue" : ""
              }`}
              style={{
                color: "#6b7280",
              }}
            >
              <FiCalendar />

              {overdue ? "Overdue · " : ""}

              {formatDate(task.due_date)}
            </span>
          )}

        </div>
      </div>

      {/* Actions */}
      <div className="task-actions">

        <button
          className="icon-btn edit"
          onClick={() => onEdit(task)}
        >
          <FiEdit2 />
        </button>

        <button
          className="icon-btn delete"
          onClick={() => onDelete(task.id)}
        >
          <FiTrash2 />
        </button>

      </div>

    </div>
  );
}

export default TaskCard;