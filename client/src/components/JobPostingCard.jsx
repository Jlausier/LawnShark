export default function JobPostingCard(postings) {

  if (!postings.length) {
    return <h3>No Job Postings Yet</h3>;
  }

  return (
   
    <div>
       {postings.postings.map(posting => (
        <div className="card w-100">
      <div className="card-body">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <h5 className="card-title fs-2">{ posting.title }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ posting.customer.location }</h6>
          </div>
          <div className="col-6 text-end d-flex flex-column align-items-end">
            <span className="px-4 py-2 rounded green text-light fs-5">${ posting.askingPrice }</span>
            <span>{ posting.frequency }</span>

          </div>
        </div>
        <p className="card-text">{ posting.description }</p>
      </div>
      </div>
      ))}
    </div>
    
    
  );
}
