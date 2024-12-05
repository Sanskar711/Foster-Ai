import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TemplateEditor from "./components/TemplateEditor";
import "./App.css";

function App() {
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem("templates")) || [];
    setTemplates(savedTemplates);
  }, []);

  const saveTemplate = (template) => {
    const updatedTemplates = templates.map((t) =>
      t.id === template.id ? template : t
    );
    setTemplates(updatedTemplates);
    localStorage.setItem("templates", JSON.stringify(updatedTemplates));
  };

  const addNewTemplate = () => {
    const newTemplate = {
      id: Date.now(),
      title: "New Template",
      text: "Enter your template text here...",
      timestamp: new Date().toLocaleTimeString(),
    };
    setTemplates([...templates, newTemplate]);
    setCurrentTemplate(newTemplate);
    localStorage.setItem("templates", JSON.stringify([...templates, newTemplate]));
  };

  return (
    <div className="app">
      <Sidebar
        templates={templates}
        setCurrentTemplate={setCurrentTemplate}
        addNewTemplate={addNewTemplate}
      />
      <TemplateEditor
        template={currentTemplate}
        saveTemplate={saveTemplate}
      />
    </div>
  );
}

export default App;