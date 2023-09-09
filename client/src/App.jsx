import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* TODO: create a CSS GRID or Bootstrap Grid System to arrange the divs */}
      <main>
        <div>
          <NavBar />
        </div>
        <div>
          <div>
            <TopBar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
