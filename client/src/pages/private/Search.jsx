import { useState } from "react";
import CompanyCard from "../../components/company/CompanyCard";

import useCompaniesSearch from "../../hooks/useCompanies";
import Skeleton from "react-loading-skeleton";

export default function Search() {
  const [searchOptions, setSearchOptions] = useState({
    searchText: "",
    services: [],
  });

  const [formData, setFormData] = useState({
    searchText: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchOptions(formData);
  };

  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useCompaniesSearch(searchOptions);
  console.log(searchOptions);
  console.log(data);

  return (
    <div className="container">
      <div className="border p-4 rounded">
        <div className="mb-5">
          <h2 className="header">Search</h2>
          <span className="body-font">
            Type in the name of the company you are looking for.
          </span>
        </div>

        <div className="d-flex flex-column">
          {/* Turn search form into a seperate component */}
          {/* <SearchForm /> */}
          <div className="mb-5">
            {/** @TODO handle submit only works on button, needs to move to form */}
            <form className="d-flex w-100" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchText"
                onChange={handleChange}
              />
              <button
                onSubmit={handleSubmit}
                className="btn btn-outline-success fs-6 header"
                type="submit"
              >
                Search
              </button>
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
