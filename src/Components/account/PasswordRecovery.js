import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";
import { useEffect } from "react";

export default function PasswordRecovery() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <PageTitle />
      <section class="md">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="common-block">
                <div class="inner-title">
                  <h4 class="mb-0">Forgot your password?</h4>
                  <p class="mb-0">Forgot your password empowers you.</p>
                </div>

                <form method="post">
                  <div class="row">
                    <div class="col-sm-12 mb-2">
                      <div class="form-group">
                        <label>Enter Your Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      <Link to="/login">Back to Login</Link>
                    </div>
                  </div>

                  <button type="button" class="butn-style2 mt-4">
                    Reset my password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
