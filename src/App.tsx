import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './utils/index.css'
import './utils/App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorite } from "./pages/Favorite";
import { UserProfile } from './pages/UserProfile';

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/favorites", element: <Favorite />},
  {path: "/UserProfile", element: <UserProfile />},
  // {path: "*", element: <PageNotFound />}
]);

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
)
