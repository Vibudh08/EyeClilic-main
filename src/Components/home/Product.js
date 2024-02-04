import React from 'react'

export default function Product() {
    const data = [1,2,3,4,5,6,7,8]
  return (
    <div>
    <section>
    <div class="container">
        <div class="text-center mb-1-9 mb-lg-2-3">
            <h2 class="mb-0">Featured Products</h2>
        </div>
        <div class="row mt-n1-9">
        {data.map((item, index) => (
            <div key={index} className="col-sm-6 col-lg-3 mt-1-9">
              <div className="product-grid-four">
                <div className="product-img">
                  <a href="shop-product-detail.html"><img src="img/product-categories/product-03.jpg" alt="..." /></a>
                  <div className="action-butn">
                    <a href="#!"><i className="ti-shopping-cart"></i></a>
                    <a href="#!"><i className="ti-eye"></i></a>
                    <a href="#!"><i className="ti-heart"></i></a>
                  </div>
                </div>
                <h3 className="h6"><a href="shop-product-detail.html">Armchair And Pillow</a></h3>
                <span className="font-weight-600 display-29 text-muted">{item}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
</section>
    </div>
  )
}
