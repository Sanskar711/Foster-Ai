import React, { useState, useEffect } from "react";

function TemplateEditor({ template, saveTemplate }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (template) {
      setTitle(template.title);
      setText(template.text);
    }
  }, [template]);

  if (!template) {
    return <div className="editor">Select a template to edit</div>;
  }

  const handleSave = () => {
    saveTemplate({ ...template, title, text });
  };

  return (
    <div className="editor">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Template Title"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Template Text"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default TemplateEditor;