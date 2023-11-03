import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Members from './pages/Members';
import OurPartners from './pages/OurPartners';
import OnlineServices from './pages/OnlineServices';
import Downloads from './pages/Downloads';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/our-partners",
    element: <OurPartners />,
  },
  {
    path: "/online-services",
    element: <OnlineServices />,
  },
  {
    path: "/downloads",
    element: <Downloads />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
