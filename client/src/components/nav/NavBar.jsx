import { useLocation } from "react-router-dom";
import NavBarLink from "./NavBarLink";
import "/src/index.css"

export default function NavBar() {
  const company = true;

  const currentPage = useLocation().pathname;

  const customerLinks = [
    {
      title: "Job Postings",
      path: "/JobPostings",
    },
    {
      title: "Search",
      path: "/Search",
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
      title: "Search",
      path: "/Search",
    },
  ];

  const links = [
    {
      title: "Company Profile",
      path: "/CompanyProfile",
    },
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
      title: "Customer Profile",
      path: "/UserProfile",
    },
    {
      title: "Job Postings",
      path: "/JobPostings",
    },
    {
      title: "Single Job Posting",
      path: "/JobPosting",
    },
    {
      title: "Search",
      path: "/Search",
    },
    {
      title: "Notifications",
      path: "/Notifications",
    },
    {
      title: "Messages",
      path: "/Messages",
    },
    {
      title: "Landing Page",
      path: "/Welcome",
    },
  ];

  return (
    <>
      <div className="main-height p-4 green text-white d-flex flex-column justify-content-between d-none d-sm-block">
        <div>
          <img src="./images/lawn-shark-logo-1000.png" className="p-1 size"></img>
          <nav className="navbar navbar-expand-lg ">
            <ul className="w-100 navbar-nav nav-pills flex-column">
              {links.map((link) => (
                <NavBarLink {...link} currentPage={currentPage} key={link.path} />
              ))}
            </ul>
          </nav>
        </div>
        <div>
        © 2023 Lawn Shark® Global Inc.
        </div>
      </div>
    </>
  );
}
