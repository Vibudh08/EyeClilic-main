import React from 'react'

export default function Bannner() {
  return (
        <section class="pt-0">
        <div class="container-fluid px-lg-1-9 px-xl-6 px-xxl-13">
            <div class="row mt-n4">
                <div class="col-md-6 mt-4">
                    <div class="offer-style02">
                        <img src="img/bg/bg-5.jpg" alt="..." />
                        <div class="text-center position-absolute top-10 start-0 end-0">
                            <span class="text-uppercase font-weight-500 text-white letter-spacing-2 d-block mb-2 mb-sm-3">new arrivals</span>
                            <h2 class="h1 mb-2 text-white">Featured Deals</h2>
                            <p class="text-white font-weight-600 display-29 d-none d-sm-block">Save on what's hot right now.</p>
                            <a href="shop-product-grid.html" class="butn-style4 sm">Shop Now<span></span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-4">
                    <div class="offer-style02">
                        <img src="img/bg/bg-5.jpg" alt="..." />
                        <div class="text-center position-absolute top-10 start-0 end-0">
                            <span class="text-uppercase font-weight-600 text-white letter-spacing-2 d-block mb-2 mb-sm-3">up to 50% off</span>
                            <h2 class="h1 mb-2 text-white">Summer Sale</h2>
                            <p class="text-white font-weight-600 display-29 d-none d-sm-block">Save on what's hot right now.</p>
                            <a href="shop-product-grid.html" class="butn-style4 sm">Shop Now<span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
