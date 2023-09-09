export default function NavBar() {
  return (
    <>
      <div className="min-vh-100 p-4 bg-dark text-white">
        <div className="">Logo</div>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav nav-pills flex-column">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Find Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Bids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
