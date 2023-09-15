import "../../index.css";

export default function BidCard() {

  const bid = {
    _id: "",
    amount: 0,
    posting: {
      _id: "",
      title: "#bid'sPostingTitle",
      service: {
        _id: "",
        name: "#serviceName",
      },
      askingPrice: 0,
      estimatePrice: 0,
      customer: {
        _id: "",
        name: "#customerName",
        location: "#customerLocation"
      },
      description: "#description",
      frequency: "#frequency",
    },
    company: {
      _id: "",
      name: "",
    },
  }

  return (
    <div className="mb-3 card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-3">{bid.posting.title}</h5>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            {/* Make into a Link */}
            <a href="/Messages" className="mx-2">Message</a>
            {/* Make button a component */}
            {/* Add a modal */}
            <span className="px-4 py-2 rounded green text-light fs-5">
              ${bid.posting.askingPrice}
            </span>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-4">
            <span className="card-text">Client: { bid.posting.customer.name }</span>
          </div>
          <div className="col-4">
            <span className="card-text">Location: { bid.posting.customer.location }</span>
          </div>
          <div className="col-4">
            <span className="card-text">Frequecny: { bid.posting.frequency }</span>
          </div>
        </div>
        <span>Description:</span>
        <p className="card-text">{ bid.posting.description }</p>
      </div>
    </div>
  );
}
