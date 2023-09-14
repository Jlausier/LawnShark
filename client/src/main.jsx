import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";

import client from "./utils/apolloClient.js";
import RoleProvider from "./utils/RoleProvider.jsx";

import App from "./App.jsx";
import SplashPage from "./pages/SplashPage.jsx";

import JobPosting from "./pages/private/JobPosting.jsx";

import FindWork from "./pages/company/FindWork.jsx";
import MyJobs from "./pages/company/MyJobs.jsx";
import MyBids from "./pages/company/MyBids.jsx";
import CompanyProfile from "./pages/private/CompanyProfile.jsx";

import JobPostings from "./pages/customer/JobPostings.jsx";
import CreateJobPosting from "./pages/customer/CreateJobPosting.jsx";
import UserProfile from "./pages/customer/UserProfile.jsx";

import Search from "./pages/company/Search.jsx";
import Notifications from "./pages/private/Notifications.jsx";
import Messages from "./pages/private/Messages.jsx";

import "./index.css";
import PrivateRoute from "./pages/PrivateRoute.jsx";

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
  <RoleProvider>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </RoleProvider>
);
