import { useMutation } from "@apollo/client";

import { ADD_BID } from "../utils/mutations";
import { getUserRoleId } from "../utils/auth";

export default function useAddBid() {
  const [addBid, { error }] = useMutation(ADD_BID, {
    refetchQueries: ["companyPosting", "myBids", "myAcceptedBids"],
  });

  async function createBid({ amount, message, postingId }) {
    try {
      const { data } = await addBid({
        variables: {
          amount,
          message,
          postingId,
          companyId: getUserRoleId(),
        },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    createBid,
    error,
  };
}
