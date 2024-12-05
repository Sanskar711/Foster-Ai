import React from "react";

function Sidebar({ templates, setCurrentTemplate, addNewTemplate }) {
  return (
    <div className="sidebar">
      <button onClick={addNewTemplate} className="new-note-btn">New Note +</button>
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