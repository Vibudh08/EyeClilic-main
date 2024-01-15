import LeftMenu from "./LeftMenu";
import PageTitle from "./PageTitle";
import { useEffect } from "react";

export default function Orders() {
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
            <LeftMenu />
            <div className="col-lg-8">
              <div className="common-block">
                <div className="inner-title">
                  <h4 className="mb-0">My Orders</h4>
                </div>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>#2257</th>
                        <td>10 January 2022</td>
                        <td>
                          <span className="fas fa-circle text-primary small mr-1"></span>{" "}
                          Pending
                        </td>
                        <td>$29</td>
                        <td>
                          <a href="#" className="text-primary">
                            Pay
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>#2256</th>
                        <td>09 January 2022</td>
                        <td>
                          <span className="fas fa-circle text-success small mr-1"></span>{" "}
                          Completed
                        </td>
                        <td>$21</td>
                        <td>
                          <a href="#" className="text-primary">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>#2255</th>
                        <td>08 January 2022</td>
                        <td>
                          <span className="fas fa-circle text-success small mr-1"></span>{" "}
                          Completed
                        </td>
                        <td>$66</td>
                        <td>
                          <a href="#" className="text-primary">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>#2254</th>
                        <td>07 January 2022</td>
                        <td>
                          <span className="fas fa-circle text-success small mr-1"></span>{" "}
                          Completed
                        </td>
                        <td>$27</td>
                        <td>
                          <a href="#" className="text-primary">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>#2253</th>
                        <td>06 January 2022</td>
                        <td>
                          <span className="fas fa-circle text-danger small mr-1"></span>{" "}
                          Cancelled
                        </td>
                        <td>$23</td>
                        <td>
                          <a href="#" className="text-primary">
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="butn-style2 mt-3" href="#">
                  <span>Show All Orders</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
