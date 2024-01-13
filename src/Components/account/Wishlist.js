import LeftMenu from "./LeftMenu";
import PageTitle from "./PageTitle";

export default function Wishlist() {
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
                  <h4 className="mb-0">My Wishlist</h4>
                </div>

                <div className="table-responsive">
                  <table className="table v-align-middle">
                    <thead>
                      <tr>
                        <th>Delete</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th>Add To Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#">
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                        <td>
                          <a href="#">
                            <img src="img/products/top-rated/1.jpg" alt="..." />
                          </a>
                        </td>
                        <td>
                          <a href="#">Amazon Echo Spot</a>
                        </td>
                        <td className="product-price">$199.00</td>
                        <td className="product-quantity">In Stock</td>
                        <td>
                          <a href="#" className="butn-style2 small">
                            Add To Cart
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#">
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                        <td>
                          <a href="#">
                            <img src="img/products/top-rated/2.jpg" alt="..." />
                          </a>
                        </td>
                        <td>
                          <a href="#">Desktop Monitor Stand</a>
                        </td>
                        <td className="product-price">$49.00</td>
                        <td className="product-quantity">In Stock</td>
                        <td>
                          <a href="#" className="butn-style2 small">
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#">
                            <i className="fas fa-trash"></i>
                          </a>
                        </td>
                        <td>
                          <a href="#">
                            <img src="img/products/top-rated/3.jpg" alt="..." />
                          </a>
                        </td>
                        <td>
                          <a href="#">Virtual Reality Headset</a>
                        </td>
                        <td className="product-price">$199.00</td>
                        <td className="product-quantity">In Stock</td>
                        <td>
                          <a href="#" className="butn-style2 small">
                            Add To Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <a className="butn-style2 mt-3" href="#">
                  <span>Clear Wishlist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
