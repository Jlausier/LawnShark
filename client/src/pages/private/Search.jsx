import { useState } from "react";
import CompanyCard from "../../components/company/CompanyCard";
import useCompaniesSearch from "../../hooks/useCompanies";
import Skeleton from "react-loading-skeleton";

export default function Search() {
  const [searchText, setSearchText] = useState(""); // State for the search text

  const handleChange = (e) => {
    setSearchText(e.target.value); // Update the search text state
  };

  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useCompaniesSearch({
    searchText, // Pass the searchText as a variable
  });

  return (
    <div className="container">
      <div className="py-4">
        <div className="mb-5">
          <h2 className="header">Search</h2>
          <span className="body-font">
            Type in the name of the company you are looking for.
          </span>
        </div>

        <div className="d-flex flex-column">
          <div className="mb-5">
            <form className="d-flex w-100" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={handleChange}
              />
              {/* <button
                className="btn btn-outline-success fs-6 header"
                type="submit"
              >
                Search
              </button> */}
            </form>
          </div>
          {data &&
          data.companiesFiltered &&
          data.companiesFiltered.length > 0 ? (
            <div>
              {data.companiesFiltered.map((company) => (
                <CompanyCard {...company} key={company._id} />
              ))}
            </div>
            ) : (
              <div className="body-font fs-4">
                Search results will appear here.
              </div>
            )}
            {!data &&
              [1, 2, 3, 4].map((n) => (
                <Skeleton className={"card-body mb-3"} height={160} key={n} />
            ))}
        </div>
      </div>
    </div>
  );
}
