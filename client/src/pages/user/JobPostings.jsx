/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import JobPostingCard from "../../components/Button";
import Button from "../../components/JobPostingCard";

export default function JobPostings() {
  const currentPage = useLocation().pathname;
  const link = {
    title: "Add New",
    path: "/CreateJobPosting",
  };

  return (
    <div className="p-5">
      <div className="border p-4 rounded">
        <div className="mb-5 d-flex justify-content-between align-items-start">
          <h2 className=" fs-1">My Job Postings</h2>
          <a
            className="btn green text-light"
            href="/CreateJobPosting"
            role="button"
          >
            New Job Posting
          </a>
          {/* <Button {...link} currentPage={currentPage} key={link.path} /> */}
        </div>
        <div className="">
          <JobPostingCard />- // Cards Go Here
        </div>
      </div>
  );
}
