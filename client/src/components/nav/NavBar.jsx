import { useLocation } from "react-router-dom";

import { getUserRole } from "../../utils/auth";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
  const role = getUserRole();
  const currentPage = useLocation().pathname;

  const customerLinks = [
    {
      title: "Job Postings",
      path: "/JobPostings",
    },
    {
      title: "Companies",
      path: "/FindCompanies",
    },
    {
      title: "About",
      path: "/About",
    },
  ];

  const companyLinks = [
    {
      title: "Find Work",
      path: "/FindWork",
    },
    {
      title: "My Jobs",
      path: "/MyJobs",
    },
    {
      title: "My Bids",
      path: "/MyBids",
    },
    {
      title: "Companies",
      path: "/FindCompanies",
    },
    {
      title: "About",
      path: "/About",
    },
  ];

  return (
    <>
      <div className=" main-height p-4 green text-white d-flex flex-column align-items-between d-none d-sm-block">
        <div className="">
          <img
            src="./images/lawn-shark-logo-1000.png"
            className="p-1 size"
          ></img>
          <nav className="navbar navbar-expand-lg ">
            <ul
              className="w-100 navbar-nav nav-pills flex-column"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {role === "customer" &&
                customerLinks.map((link) => (
                  <NavBarLink
                    {...link}
                    currentPage={currentPage}
                    key={link.path}
                  />
                ))}
              {role === "company" &&
                companyLinks.map((link) => (
                  <NavBarLink
                    {...link}
                    currentPage={currentPage}
                    key={link.path}
                  />
                ))}
            </ul>
          </nav>
        </div>
        <div className="">© 2023 Lawn Shark® Global Inc.</div>
      </div>
    </>
  );
}
