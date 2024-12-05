import React, { useState, useEffect } from "react";

function TemplateEditor({ template, saveTemplate }) {
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (template) {
      setTitle(template.title || ""); // Load title
      setSections(template.sections || []); // Load sections
    }
  }, [template]);

  const handleSectionChange = (index, key, value) => {
    const updatedSections = [...sections];
    updatedSections[index][key] = value;
    setSections(updatedSections);
  };

  const addSection = () => {
    setSections([
      ...sections,
      { title: "New Section", content: "Enter content here..." },
    ]);
  };

  const handleSave = () => {
    saveTemplate({ ...template, title, sections }); // Save title and sections
  };

  if (!template) {
    return <div className="editor">Select a template to edit</div>;
  }

  return (
    <div className="editor">
      {/* Editable Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title
        placeholder="Template Title"
        className="template-title"
      />
      {/* Editable Sections */}
      {sections.map((section, index) => (
        <div key={index} className="section">
          <input
            type="text"
            value={section.title}
            onChange={(e) =>
              handleSectionChange(index, "title", e.target.value)
            }
            placeholder="Section Title"
          />
          <textarea
            value={section.content}
            onChange={(e) =>
              handleSectionChange(index, "content", e.target.value)
            }
            placeholder="Section Content"
          />
        </div>
      ))}
      <button onClick={addSection} className="add-section-btn">
        Add Section
      </button>
      <button onClick={handleSave} className="save-template-btn">
        Save Template
      </button>
    </div>
  );
}

export default TemplateEditor;