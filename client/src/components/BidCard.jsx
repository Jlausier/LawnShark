import "../index.css";

export default function BidCard() {

  const bid = {
    _id: "",
    amount: 0,
    posting: {
      _id: "",
      title: "#postingTitle",
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
  <div className="card">
    <div className="card-body">
      <div className="row mt-2 mb-4">
        <div className="col-6">
        <h5 className="card-title">{bid.posting.title}</h5>
        </div>
      </div>
      
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
  );
}
