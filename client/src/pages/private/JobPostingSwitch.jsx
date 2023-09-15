import { getUserRole } from "../../utils/auth";

import JobPosting from "./JobPosting";
import JobPostingCompanyView from "./JobPostingCompanyView";
import { useNavigate } from "react-router-dom";

export default function JobPostingSwitch() {
  const navigate = useNavigate();
  const role = getUserRole();

  if (role === "customer") return <JobPosting />;
  else if (role === "company") return <JobPostingCompanyView />;
  else navigate("/Welcome");
}
