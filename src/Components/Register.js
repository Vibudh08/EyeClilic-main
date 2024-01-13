import React from 'react';
import {Link} from 'react-router-dom';

function Register() {

  return (
    <section className="md ">
      <div className="container">
        <div className="row  d-flex justify-content-center">
         <div className="col-lg-7">
          <div className="common-block">
            <div className="inner-title">
              <h4 className="mb-0">Register</h4>
              <p className="mb-0">There's lots of fun in Register.</p>
            </div>

            <form method="post">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your name here"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Your User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Your user name here"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your email here"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="+40-123 456 789"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Your password here"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Re-Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="re-password"
                      placeholder="Your re-password here"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms-condition"
                    />
                    <label className="form-check-label" for="terms-condition">
                      I agree to the{" "}
                      <Link to="#" className="text-primary">
                        Terms & Conditions
                      </Link>
                    </label><br />
                    <label className="form-check-label" for="login">
                      Already a member?
                      <Link to="/login" className="text-primary">
                        Login
                      </Link>
                    </label>
                  </div>
                </div>
              </div>

              <button type="button" className="butn-style2 mt-4">
                Register
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
