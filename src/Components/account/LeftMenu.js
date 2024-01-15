import { Link } from "react-router-dom";
import Address from "./Address";
import Orders from "./Orders";
import PageTitle from "./PageTitle";
import Profile from "./Profile";
import Wishlist from "./Wishlist";

export default function LeftMenu() {
  return (
    <>
      <div className="col-lg-4 col-sm-9 mb-2-3 mb-lg-0">
        <div className="account-pannel">
          <div className="p-4">
            <div className="text-center">
              <div className="pb-3">
                <img
                  className="img-fluid rounded-circle img-thumbnail"
                  src="img/avatar/t-3.jpg"
                  alt="..."
                />
              </div>
              <h6 className="mb-0 display-28">Peter Parker</h6>
              <small>Joined February 06, 2017</small>
              <div className="reward-points">
                <i className="ti-star text-primary pe-1"></i> Points: 7386
              </div>
            </div>
          </div>

          <div className="list-group">
            <Link to="/profile" className="list-group-items">
              <i className="ti-bag pe-2"></i>Profile
              <span className="badge badge-pill">1</span>
            </Link>
            <Link to="/orders" className="list-group-items">
              <i className="ti-bag pe-2"></i>Orders
              <span className="badge badge-pill">1</span>
            </Link>
            <Link to="/address" className="list-group-items">
              <i className="ti-bag pe-2"></i>Address
              <span className="badge badge-pill">1</span>
            </Link>
            <Link to="/wishlist" className="list-group-items">
              <i className="ti-bag pe-2"></i>Wishlist
              <span className="badge badge-pill">1</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
