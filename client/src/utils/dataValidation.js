export function postingHasCompanyBid({ role, _id }, bids) {
  if (role === "customer" || role === "none") return false;
  bids.forEach((bid) => {
    if (bid.company._id === _id) {
      return true;
    }
  });
  return false;
}
