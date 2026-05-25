// components/TaskForm.jsx
// This component renders the "Add Task" or "Edit Task" form

import { useState, useEffect } from "react";
import { FiPlus, FiEdit3, FiX } from "react-icons/fi";
import "../styles/components.css";

// Initial empty form state — reused when resetting
const INITIAL_STATE = {
  title: "",
  description: "",
  dueDate: "",
  priority: "medium",
};

function TaskForm({ onSubmit, editTask, onCancelEdit, loading }) {
  // Form data stored in state
  const [formData, setFormData] = useState(INITIAL_STATE);

  // When editTask changes (user clicked Edit), fill form with task data
  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title || "",
        description: editTask.description || "",
        // Format date from ISO to yyyy-mm-dd for input[type=date]
        dueDate: editTask.dueDate ? editTask.dueDate.slice(0, 10) : "",
        priority: editTask.priority || "medium",
      });
    } else {
      setFormData(INITIAL_STATE); // Reset if not editing
    }
  }, [editTask]);

  // Handle any input change generically using the field name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On form submit, call the parent's onSubmit with formData
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return; // Don't submit if title is empty
    onSubmit(formData);
    if (!editTask) setFormData(INITIAL_STATE); // Reset only when adding
  };

  const isEditing = Boolean(editTask);

  return (
    <div className="task-form-card">
      <h3 className="form-title">
        {isEditing ? <><FiEdit3 /> Edit Task</> : <><FiPlus /> New Task</>}
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Title — spans full width */}
        <div className="form-grid">
          <div className="form-group full">
            <label className="form-label">Task Title *</label>
            <input
              className="form-input"
              type="text"
              name="title"
              placeholder="What needs to be done?"
              value={formData.title}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          {/* Description */}
          <div className="form-group full">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              name="description"
              placeholder="Optional details..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Due Date */}
          <div className="form-group">
            <label className="form-label">Due Date</label>
            <input
              className="form-input"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          {/* Priority */}
          <div className="form-group">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="high">🔴 High</option>
              <option value="medium">🟡 Medium</option>
              <option value="low">🟢 Low</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          {/* Show Cancel only when editing */}
          {isEditing && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onCancelEdit}
            >
              <FiX /> Cancel
            </button>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading || !formData.title.trim()}
          >
            {loading
              ? "Saving..."
              : isEditing
              ? "Update Task"
              : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
