import LeftMenu from "./LeftMenu";
import PageTitle from "../title";
import { useEffect } from "react";


export default function Profile() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    const data = "Profile"
  return (
    <>
      <PageTitle message={data}/>
      <section class="md">
        <div class="container">
          <div class="row justify-content-center">
            <LeftMenu/>
            <div class="col-lg-8">
              <div class="common-block">
                <div class="inner-title">
                  <h4 class="mb-0">My {data}</h4>
                  <p class="mb-0">Time for a Sharp My profile.</p>
                </div>

                <form method="post">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Your name here"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Your User Name</label>
                        <input
                          type="text"
                          class="form-control"
                          name="username"
                          placeholder="Your user name here"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Your email here"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Contact Number</label>
                        <input
                          type="text"
                          class="form-control"
                          name="phone"
                          placeholder="+40-123 456 789"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          placeholder="Your password here"
                        />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Re-Password</label>
                        <input
                          type="password"
                          class="form-control"
                          name="re-password"
                          placeholder="Your re-password here"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12 mb-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="terms-condition"
                        />
                        <label class="form-check-label" for="terms-condition">
                          I agree to the{" "}
                          <a href="/" class="text-primary">
                            Terms & Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button type="button" class="butn-style2 mt-4">
                    Update Profile
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