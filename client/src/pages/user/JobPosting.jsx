export default function JobPosting() {

  const posting = {
    _id: "",
    title: "#title",
    service: {
      _id: "",
      name: "#service",
    },
    askingPrice: 120.0,
    estimatePrice: 150.0,
    bids: [
      {
        _id: "",
        amount: 140.0,
        company: {
          _id: "",
          name: "",
        },
      },
    ],
    customer: {
      _id: "",
      name: "#name",
      location: "#location",
    },
    description: "#description",
    frequency: "#frequency",
  };

  return (
    <div className='p-5'>
      <div className="border p-4 rounded">
        <div className="row">
            <div className="col-6">
              <h2 className=' fs-1'>{ posting.title }</h2>
              <span>{ posting.service.name }</span>
            </div>
            <div className="col-6 text-end">
              <span className="mx-3 fs-5">Total Bids: { posting.bids.length }</span>
              <span className="px-4 py-2 rounded green text-light fs-4">${ posting.askingPrice }</span>
            </div>
        </div>
        <hr/>
        <div className='d-flex flex-column'>
          <span>Location: { posting.customer.location }</span>
          <span>Frequency: { posting.frequency }</span>
          <span> { posting.customer.name } </span>
          <p>{ posting.description }</p>
        </div>
        <div className="">
          {/* Switch for button component */}
          <a class='btn green text-light' href='#' role='button'>Place Bid</a>
        </div>
      </div>
      
    </div>
);
}
