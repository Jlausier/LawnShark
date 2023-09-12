export default function SignUpForm() {


    return (
        <div>
        <h2 className="fs-5">Sign Up to Lawn Shark</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">
                Name
                </label>
                <input
                type="name"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                />
                <div id="nameHelp" className="form-text text-white">
                We&apos;ll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
                </label>
                <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-white">
                We&apos;ll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                Password
                </label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
    );
  }
  
  
  
  