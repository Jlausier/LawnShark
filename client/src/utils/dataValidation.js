import { getUserId, getUserRoleId, getUserRole } from "./auth";

export function postingHasCompanyBid(bids) {
  const userRole = getUserRole();
  if (userRole === "customer" || userRole === "none") return false;
  bids.forEach((bid) => {
    if (bid.company._id === getUserRoleId()) {
      return true;
    }
  });
  return false;
}

export function createLocationString({ address, city, state, zip }) {
  return `${address}, ${city}, ${state} ${zip}`;
}

export const createNameStub = (serviceName) => serviceName.split(" ").join("_");



