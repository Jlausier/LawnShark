import { getUserId, getUserRole } from "./auth";

export function postingHasCompanyBid(bids) {
  const userRole = getUserRole();
  if (userRole === "customer" || userRole === "none") return false;
  bids.forEach((bid) => {
    if (bid.company._id === getUserId()) {
      return true;
    }
  });
  return false;
}
