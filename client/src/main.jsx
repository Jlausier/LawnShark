import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";

import client from "./utils/apolloClient.js";

import App from "./App.jsx";
import SplashPage from "./pages/SplashPage.jsx";

import FindWork from "./pages/company/FindWork.jsx";
import MyJobs from "./pages/company/MyJobs.jsx";
import MyBids from "./pages/company/MyBids.jsx";
import CompanyProfile from "./pages/company/CompanyProfile.jsx";

import JobPostings from "./pages/user/JobPostings.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";

import Search from "./pages/Search.jsx";
import Notifications from "./pages/Notifications.jsx";
import Messages from "./pages/Messages.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/SplashPage",
        element: <SplashPage />,
      },
      {
        path: "/FindWork",
        element: <FindWork />,
      },
      {
        path: "/MyJobs",
        element: <MyJobs />,
      },
      {
        path: "/MyBids",
        element: <MyBids />,
      },
      {
        path: "/CompanyProfile",
        element: <CompanyProfile />,
      },
      {
        path: "/JobPostings",
        element: <JobPostings />,
      },
      {
        path: "/UserProfile",
        element: <UserProfile />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Notifications",
        element: <Notifications />,
      },
      {
        path: "/Messages",
        element: <Messages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
