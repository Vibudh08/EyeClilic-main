import LeftMenu from "./LeftMenu";
import PageTitle from "../title";
import { useEffect } from "react";

export default function Orders() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    const data = "Orders";
    const tableData = {
      order : [2257,2255,2254,2253],
      date : ['10 January 2022','09 January 2022','08 January 2022','07 January 2022'],
      status : ['Pending','Completed','Completed','Cancelled'],
      total : [29,21,25,30],
      actions : ['Pay','View','Pay','View']
    };
  return (
    <>
      <PageTitle message={data} />
      <section class="md">
        <div class="container">
          <div class="row justify-content-center">
            <LeftMenu />
            <div className="col-lg-8">
              <div className="common-block">
                <div className="inner-title">
                  <h4 className="mb-0">My {data}</h4>
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
                    {tableData.order.map((item,index)=>(
                      <tr>
                      <th>{item}</th>
                      <td>{tableData.date[index]}</td>
                      <td>
                        <span className="fas fa-circle text-primary small mr-1"></span>{" "}
                        {tableData.status[index]}
                      </td>
                      <td>$ {tableData.total[index]} </td>
                      <td>
                        <a href="/" className="text-primary">
                          {tableData.actions[index]}
                        </a>
                      </td>
                    </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                <a className="butn-style2 mt-3" href="/">
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