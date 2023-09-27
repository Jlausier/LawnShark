import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { loggedIn, getHomeLink } from "./utils/auth";

import NavBar from "./components/nav/NavBar";
import TopBar from "./components/nav/TopBar";

import "./app.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  useEffect(() => {
    if (!loggedIn()) navigate("/Welcome");
    else if (currentPage === "/") navigate(getHomeLink());
  }, [navigate, currentPage]);

  return (
    <>
      <main className="main-height row gx-0 green">
        <div className="d-none d-sm-block col-md-3 col-lg-2 gx-0">
          <NavBar />
        </div>
        <div className="containerClass rounded-start-4 bg-light col-sm-12 col-md-9 col-lg-10 gx-0">
          <div className="row gx-0">
            <TopBar />
          </div>
          <div className="border  rounded row mx-5 mb-3 pb-5 px-5 gx-0 overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
