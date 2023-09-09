export default function TopBar() {

    return (
      <div className="bg-dark-subtle">
        <nav className="px-3 navbar navbar-expand-lg navbar-light bg-light">
            {/* Collapse Button for Responsiveness */}
            <button className="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Visible NavBar */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Messages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    );
};