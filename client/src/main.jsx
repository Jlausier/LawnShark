import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import client from "./utils/apolloClient.js";

import App from "./App.jsx";
import SplashPage from "./pages/SplashPage.jsx";

import { FindWork, MyBids, MyJobs, Search } from "./pages/company";
import { CreateJobPosting, JobPostings, UserProfile } from "./pages/customer";
import {
  CompanyProfile,
  JobPosting,
  Messages,
  Notifications,
} from "./pages/private";
import PrivateRoute from "./pages/private/PrivateRoute.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const privateRoutes = [
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
    path: "/CompanyProfile/:companyId",
    element: <CompanyProfile />,
  },
  {
    path: "/JobPostings",
    element: <JobPostings />,
  },
  {
    path: "/JobPosting/:postingId",
    element: <JobPosting />,
  },
  {
    path: "/CreateJobPosting",
    element: <CreateJobPosting />,
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
].map((route) => {
  return {
    ...route,
    element: <PrivateRoute>{route.element}</PrivateRoute>,
  };
});

const router = createBrowserRouter([
  {
    path: "/Welcome",
    element: <SplashPage />,
  },
  {
    path: "/",
    element: <App />,
    children: privateRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
