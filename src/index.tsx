// Import necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Members from './pages/Members/Members';
import OurPartners from './pages/OurPartners/OurPartners';
import OnlineServices from './pages/OnlineServices/OnlineServices';
import Downloads from './pages/Downloads/Downloads';
import Benefits from './pages/Benefits/Benefits';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyNotice from './pages/PrivacyNotice/PrivacyNotice';
import Sitemap from './pages/Sitemap/Sitemap';
import NotFound from './pages/NotFound/NotFound';

// Create a BrowserRouter
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
  {
    path: "/benefits",
    element: <Benefits />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/privacy-notice",
    element: <PrivacyNotice />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// Create a root element and render the RouterProvider
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
