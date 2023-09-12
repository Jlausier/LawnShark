// import SearchForm from '../components/SearchForm'
import { useState } from "react";
import CompanyCard from "../components/CompanyCard";

import { useCompaniesSearch } from "../hooks/useCompanies";

export default function Search() {
  const [searchOptions, setSearchOptions] = useState();

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

  const companies = useCompaniesSearch({ ...searchOptions });

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
                onChange={handleChange}
              />
              <button
                onSubmit={handleSubmit}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          {companies && companies.length > 0 ? (
            <div>
              {companies.map((company) => (
                <CompanyCard {...company} key={company._id} />
              ))}
            </div>
          ) : (
            <div>no companies</div>
          )}
        </div>
      </div>
    </div>
  );
}
