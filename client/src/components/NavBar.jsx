import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {

  const currentPage = useLocation().pathname;

  return (
    <>
      <div className="min-vh-100 p-4 bg-dark text-white">
        <div className="">Logo</div>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav nav-pills flex-column">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link
                  to="/FindWork"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  Find Work
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  to="/MyJobs"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  My Jobs
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  to="/MyBids"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  My Bids
                </Link>              
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  to="/Search"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  Search
                </Link>   
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
