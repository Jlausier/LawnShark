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
          rating: 0,
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
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
  );
}