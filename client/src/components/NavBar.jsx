import { useLocation } from "react-router-dom";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
  const company = true;

  const currentPage = useLocation().pathname;
  const links = [
    {
      title: "Find Work",
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

  return (
    <>
      <div className="min-vh-100 p-4 bg-dark text-white">
        <div className="">Logo</div>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav nav-pills flex-column">
            {links.map((link) => (
              <NavBarLink {...link} currentPage={currentPage} key={link.path} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
