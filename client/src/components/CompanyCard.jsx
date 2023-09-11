export default function CompanyCard() {

  const company = {
    _id: "",
    email: "#test@email.com",
    password: "#password",
    _company: {
      _id: "",
      name: "#companyName",
      description: "#description",
      services: [
        {
          _id: "",
          name: "#serviceName",
        }
      ],
      reviews: [
        {
          reviewText: "#reviewText",
          createdAt: "#createdAt",
          rating: 5,
          customer: {
            _id: "",
            name: "#customerName"
          }
        }
      ]
    },
  }; 

  return (
      <div class="card w-100">
        <div class="card-body">
          <div className="row mt-2 mb-4">
            <div className="col-6">
              <h5 class="card-title fs-2">{ company._company.name }</h5>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              {/* Make into a Link */}
              <a href="/Messages" className="mx-2">Message</a>
              <span className="mx-3 fs-6">
                Total Reviews: {company._company.reviews.length}
              </span>
              <span className="px-4 py-2 rounded green text-light fs-5">{ company._company.reviews[0].rating }</span>
            </div>
          </div>
          <p class="card-text">{ company._company.description }</p>
        </div>
      </div>
  );
}