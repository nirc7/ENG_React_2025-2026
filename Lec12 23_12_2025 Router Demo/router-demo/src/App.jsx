import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import Root from './Pages/Root';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
      ],
    },
    {
      path: "/page3/:userId",
      element: <Page3 />
    },
    {
      path: "/page4",
      element: <Page4 />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
