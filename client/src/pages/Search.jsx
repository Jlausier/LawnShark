// import SearchForm from '../components/SearchForm'
import CompanyCard from "../components/CompanyCard";

export default function Search() {
  return (
    <div className="container p-5">
      <div className="border p-4 rounded">
        <div className="mb-5">
          <h2 className="fs-1">Search</h2>
          <span>
            Type in the name of the company you would like to work with.
          </span>
        </div>

        <div className="d-flex flex-column">
          {/* Turn search form into a seperate component */}
          {/* <SearchForm /> */}
          <div className="mb-5">
            <form className="d-flex w-100" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div>
            <CompanyCard />
          </div>
        </div>
      </div>
    </div>
  );
}
