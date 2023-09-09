import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      {/* TODO: create a CSS GRID or Bootstrap Grid System to arrange the divs */}
      <main className='min-vh-100 row gx-0'>
        <div className='border col-sm-4 col-md-4 col-lg-3 gx-0'>
          <NavBar /> NavBar
        </div>
        <div className='border col-sm-8 col-md-8 col-lg-9 gx-0'>
          <div className='border row gx-0'>
            <TopBar /> TopBar
          </div>
          <div className='border row gx-0'>
            <Outlet />Outlet
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
