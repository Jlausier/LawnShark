import { useMutation } from "@apollo/client";

import { REMOVE_BID } from "../utils/mutations";

export default function useRemoveBid() {
  const [_removeBid, { error }] = useMutation(REMOVE_BID, {
    refetchQueries: ["companyPosting", "myBids", "myAcceptedBids"],
  });

  async function removeBid(bidId) {
    try {
      const { data } = await _removeBid({
        variables: { bidId },
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  return { removeBid, error };
}
