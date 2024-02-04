import LeftMenu from "./LeftMenu";
import PageTitle from "../title";
import { useEffect } from "react";

export default function Address() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    const data = "Address";
  return (
    <>
      <PageTitle message={data}/>
      <section class="md">
        <div class="container">
          <div class="row justify-content-center">
            <LeftMenu />
            <div className="col-lg-8">
              <div className="common-block">
                <div className="inner-title">
                  <h4 className="mb-0">Contact {data}</h4>
                </div>

                <form method="post">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          placeholder="Your company name here"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          placeholder="Your address here"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          placeholder="Your city name here"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>State</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          placeholder="Your state name here"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="zip"
                          placeholder="Your zip code here"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="inner-title mt-1-9">
                    <h4 className="mb-0">Shipping Address</h4>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 mb-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="same-contact"
                        />
                        <label className="form-check-label" for="same-contact">
                          Same as contact address
                        </label>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="butn-style2 mt-4">
                    Update Address
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