
# 📘 React Developer Dashboard – Project Specification

## 🧩 Overview
Build a React + TypeScript developer dashboard that interacts with GitHub’s public API to search, view, and favorite developers. This is designed to test core React skills over 3 days.

---

## 🚀 Tech Stack
- React 18+ with TypeScript
- React Router v6
- Context API / useReducer
- Fetch API or Axios
- Tailwind CSS or CSS Modules
- GitHub REST API
- Optional: Jest + React Testing Library

---

## 📁 Folder Structure (Recommended)
```
/src
  /components
  /context
  /hooks
  /pages
  /utils
  App.tsx
  index.tsx
  types.d.ts
```

---

## 🌐 Pages & Layout

### 🏠 1. Home Page (`/`)

**Purpose:** Display a paginated list of GitHub users.

**Layout:**
- 🔍 SearchBar (debounced)
- ⬅️ Prev / Next pagination controls
- 🧑‍💻 Grid of UserCard components
- Loader or error message when applicable

**Data Source:** `GET https://api.github.com/users`  
**Search:** `GET https://api.github.com/search/users?q={username}`

---

### 👤 2. User Profile Page (`/user/:username`)

**Purpose:** Show detailed GitHub user information.

**Layout:**
- Avatar, name, username, bio
- Location, followers, following, public repos
- Optional: Recent repositories

**Data Source:** `GET https://api.github.com/users/:username`

---

### ⭐ 3. Favorites Page (`/favorites`)

**Purpose:** Show users added to favorites.

**Layout:**
- Grid of favorited UserCard components
- Message if list is empty

**State:** Uses Context API or useReducer with localStorage persistence

---

## 🧱 Components

### `UserCard.tsx`
- Props: GitHub user data
- Includes avatar, username, profile button, favorite toggle

### `SearchBar.tsx`
- Props: `onSearch(query: string)`
- Debounces input using `useDebounce`

### `Loader.tsx`
- Displays a loading spinner

---

## 🧪 Features
| Feature             | Description                                   |
|---------------------|-----------------------------------------------|
| User List           | Fetch & render paginated users                |
| Search              | Debounced search via GitHub API               |
| Profile View        | Detailed view with conditional loading/errors |
| Favorites           | Global state with localStorage support        |
| Routing             | React Router for 3 core views                 |
| TypeScript          | Strong typing for props and context           |
| Optional: Testing   | Use Jest + RTL for unit/component tests       |

---

## 🔐 GitHub API Notes

**Base URL:** `https://api.github.com`

**Endpoints:**
- List Users: `/users`
- Search Users: `/search/users?q=`
- User Detail: `/users/:username`
- User Repos: `/users/:username/repos`

**Rate Limit:**
- 60 requests/hr (unauthenticated)
- Use personal access token for higher limits

```ts
headers: {
  Authorization: `token YOUR_TOKEN`
}
```

---

## 📝 Evaluation Criteria

| Area               | Notes                                           |
|--------------------|-------------------------------------------------|
| React Proficiency  | Use of hooks, context, custom hooks             |
| State Management   | Context/useReducer with persistence             |
| Code Quality       | Structure, reusability, typing                  |
| Feature Completion | Full user flows, loading/error states           |
| UI/UX              | Clean, responsive, intuitive                    |
| Bonus              | Unit tests, dark mode, recent repos             |
