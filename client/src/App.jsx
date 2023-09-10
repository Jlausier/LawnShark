import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

import './app.css';

function App() {
  return (
    <>
      {/* TODO: create a CSS GRID or Bootstrap Grid System to arrange the divs */}
      <main className="min-vh-100 row gx-0 green">
        <div className="col-sm-4 col-md-3 col-lg-2 gx-0">
          <NavBar />
        </div>
        <div className='min-vh-100 bg-light col-sm-8 col-md-9 col-lg-10 gx-0'>
          <div className='row gx-0'>
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
