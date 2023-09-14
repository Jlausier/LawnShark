import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { loggedIn } from "./utils/auth";

import NavBar from "./components/nav/NavBar";
import TopBar from "./components/nav/TopBar";

import "./app.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn()) {
      navigate("/welcome");
    }
  }, [navigate]);

  return (
    <>
      {/* TODO: create a CSS GRID or Bootstrap Grid System to arrange the divs */}
      <main className="main-height row gx-0 green">
        <div className="col-sm-4 col-md-3 col-lg-2 gx-0">
          <NavBar />
        </div>
        <div className="main-height bg-light col-sm-8 col-md-9 col-lg-10 gx-0">
          <div className="row gx-0">
            <TopBar />
          </div>
          <div className="row gx-0">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
