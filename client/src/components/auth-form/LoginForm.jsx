import Button from "../Button";

export default function LoginForm() {

  const handleSubmit = () => {
    alert("Submit Form");
  }

  return (
    <div>
      <h2 className="fs-5">Log in to Lawn Shark</h2>
      <form>
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
        <Button title={"Submit"} onClick={handleSubmit}/>
      </form>
    </div>
  );
}
