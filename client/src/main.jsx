import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import App from "./App.jsx";
import FindWork from './pages/company/FindWork.jsx';
import MyBids from './pages/company/MyBids.jsx';
import CompanyProfile from './pages/company/CompanyProfile.jsx';
import JobPostings from './pages/user/JobPostings.jsx';
import UserProfile from './pages/user/UserProfile.jsx';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: '/FindWork',
        element: <FindWork />,
      },
      {
        path: '/MyBids',
        element: <MyBids />,
      },
      {
        path: '/CompanyProfile',
        element: <CompanyProfile />,
      },
      {
        path: '/JobPostings',
        element: <JobPostings />,
      },
      {
        path: '/UserProfile',
        element: <UserProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
