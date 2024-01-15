import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section class="md">
      <div class="container d-flex justify-content-center">
        <div class="row col-lg-6 mb-1-9 mb-lg-0">
          <div class="common-block">
            <div class="inner-title">
              <h4 class="mb-0">Login</h4>
              <p class="mb-0">Everything is simple with Login.</p>
            </div>

            <form method="post">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Your user name here"
                    />
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Password </label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Your password here"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="login-remember"
                    />
                    <label class="form-check-label" for="login-remember">
                      Keep me signed in
                    </label>
                  </div>
                </div>
                <div class="col-sm-6 text-start text-md-end">
                  <Link to="/passwordrecovery" class="m-link-muted">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <label className="form-check-label" for="login">
                Not a member yet?
                <Link to="/register" className="text-primary">
                  Register
                </Link>
              </label>
              <br />

              <button type="button" class="butn-style2 mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
