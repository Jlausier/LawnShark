export default function SplashPage() {

    return (
      <div className="min-vh-100 green d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <span>Welcome to</span>
            <h1>Lawn Shark</h1>
            <span>Company Slogan</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a tincidunt magna. </p>
          </div>
          <div className="p-4 border border-1 rounded bg-light col d-flex flex-column">
            <h2 className="fs-5">Log in to Lawn Shark</h2>
            {/* Move Into A Component */}
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <hr/>
            <div>
              <span>Don't have an account? </span>
              <a>Sign-up</a>
            </div>

          </div>
        </div>
      </div>
    );
}