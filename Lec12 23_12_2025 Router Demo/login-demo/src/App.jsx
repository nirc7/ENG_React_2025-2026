
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'

import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <HomePage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
