import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import client from "./utils/apolloClient.js";

import App from "./App.jsx";
import SplashPage from "./pages/SplashPage.jsx";

import { FindWork, MyBids, MyJobs, CompanyRoute } from "./pages/company";
import {
  CreateJobPosting,
  JobPostings,
  UserProfile,
  CustomerRoute,
} from "./pages/customer";
import {
  CompanyProfile,
  JobPostingSwitch,
  Search,
  Messages,
  Notifications,
  PrivateRoute,
  About,
} from "./pages/private";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const companyRoutes = [
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
].map((route) => ({
  ...route,
  element: <CompanyRoute>{route.element}</CompanyRoute>,
}));

const customerRoutes = [
  {
    path: "/JobPostings",
    element: <JobPostings />,
  },
  {
    path: "/CreateJobPosting",
    element: <CreateJobPosting />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
].map((route) => ({
  ...route,
  element: <CustomerRoute>{route.element}</CustomerRoute>,
}));

const privateRoutes = [
  {
    path: "/CompanyProfile/:companyId",
    element: <CompanyProfile />,
  },
  {
    path: "/JobPosting/:postingId",
    element: <JobPostingSwitch />,
  },
  {
    path: "/FindCompanies",
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
  {
    path: "/About",
    element: <About />,
  },
].map((route) => ({
  ...route,
  element: <PrivateRoute>{route.element}</PrivateRoute>,
}));

const router = createBrowserRouter([
  {
    path: "/Welcome",
    element: <SplashPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [...privateRoutes, ...customerRoutes, ...companyRoutes],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
