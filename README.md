# FosterHealth - Clinical Notes Template Editor

## Overview
FosterHealth is a React.js-based application designed to assist clinicians in creating, editing, and managing clinical notes using customizable templates. The application supports dynamic sections (e.g., "Subjective," "Physical Examination") and provides an interactive interface for efficient note-taking.

## Features
- **Create New Templates:** Add new clinical note templates with editable titles and dynamic sections.
- **Edit Templates:** Modify section titles and content easily.
- **Dynamic Sections:** Add, edit, or remove sections as needed for each template.
- **Persistence:** Templates are saved locally using `localStorage` and remain available across page refreshes.
- **Copy and Edit Actions:** Use inline actions to edit, copy, or delete specific sections.
- **Interactive Sidebar:** Quickly navigate between templates with timestamps and hover effects.

---

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/Sanskar711/Foster-Ai.git
cd FosterHealthApp
```
### Step 2: Install Dependencies

Ensure you have Node.js installed. Then run:

```bash
npm install
```
### Step 3: Start the Application
```bash
npm start
```
The application will run on http://localhost:3000.

### Usage Instructions

Create a New Template

1. Click the “New Note +” button in the sidebar to add a new template.
2. A default template is created with editable sections.

Edit Template Content

1. Select a template from the sidebar to load it in the editor.
2. Modify the title, section headers, and content directly in the editor.

Add Sections

1. Use the “Add Section” button to include new sections dynamically.

Save Changes

1. Click “Save Template” to persist your changes to localStorage.

Navigate Templates

1. Use the sidebar to switch between templates quickly.
