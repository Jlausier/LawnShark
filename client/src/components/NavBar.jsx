export default function NavBar() {
  return (
    <>
      <div className="min-vh-100 p-4 bg-success text-white ">
        <div className="pb-2">Logo</div>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav nav-pills flex-column">
            <li className="nav-item active pb-2">
            <button type="button" class="btn btn-secondary">Find Work</button>
            </li>
            <li className="nav-item pb-2">
            <button type="button" class="btn btn-secondary">My bids</button>
            </li>
            <li className="nav-item pb-2">
            <button type="button" class="btn btn-secondary">Search</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
