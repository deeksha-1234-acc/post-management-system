📝 Post Management System (Mini CRUD App)
Overview

This is a small React application for managing posts (like a mini blog admin).
It allows users to create, read, update, and delete posts. The app uses localStorage for data persistence and Tailwind CSS for styling.

Features

Post List

Display posts as cards (title, author, short excerpt)

Search posts by title

Filter posts by author (optional)

Pagination (optional)

Create Post

Form fields: title, author, content, tags (comma-separated)

Validation: required fields and minimum content length

Edit/Delete Post

Edit existing posts

Delete with confirmation

View Post

Full content

Tags displayed as chips

Created/updated timestamps

Routing

/ → Post List

/posts/new → Create Post

/posts/:id → View Post

/posts/:id/edit → Edit Post

State Management

Component state with custom useLocalStorage hook

Optional Features

Toast notifications for CRUD actions

Form autosave drafts

Mock API integration with json-server

Tech Stack

React (Vite)

Tailwind CSS

React Router

localStorage (no backend)

uuid for unique post IDs

Project Structure
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ PostCard.jsx
 │   └─ PostForm.jsx
 ├─ hooks/
 │   └─ useLocalStorage.js
 ├─ pages/
 │   ├─ PostCreate.jsx
 │   ├─ PostEdit.jsx
 │   ├─ PostList.jsx
 │   └─ PostView.jsx
 ├─ utils/
 │   └─ validators.js
 ├─ routes.jsx
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
tailwind.config.js
index.html
package.json
