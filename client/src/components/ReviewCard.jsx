export default function ReviewCard() {

  const review ={
      reviewText: "#reviewText",
      createdAt: "#createdAt",
      rating: 5,
      customer: {
        _id: "",
        name: "#customerName",
        location: "#customerLocation"
      },
  }

    return (
      <div class="card w-100">
        <div class="card-body">
          <div className="row mt-2 mb-4">
            <div className="col-6">
              <h5 class="card-title fs-5">{ review.customer.name }</h5>
              <h6 className="card-subtitle fs-6 text-muted">{ review.createdAt }</h6>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <span className="px-4 py-2 rounded green text-light fs-6">{ review.rating }</span>
            </div>
          </div>
          <p class="card-text">{ review.reviewText }</p>
        </div>
      </div>
    );
  }