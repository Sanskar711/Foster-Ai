import React from "react";

function Sidebar({ templates, setCurrentTemplate, addNewTemplate }) {
  return (
    <div className="sidebar">
      {/* Header Section */}
      <header className="sidebar-header">
        <h1>FosterHealth</h1>
      </header>

      {/* New Note Button */}
      <button onClick={addNewTemplate} className="new-note-btn">
        New Note +
      </button>

      {/* Template List */}
      <ul className="template-list">
        {templates.map((template) => (
          <li
            key={template.id}
            onClick={() => setCurrentTemplate(template)}
            className="template-item"
          >
            <h3>{template.title}</h3>
            <p>{template.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;