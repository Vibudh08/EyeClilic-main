import React from 'react'

export default function Slider() {
  return (
    <section className="full-screen p-0 top-position">
    <div className="slider-fade2 owl-carousel owl-theme w-100">
        <div className="item bg-img h-100 w-100 cover-background" data-overlay-dark="0" style={{backgroundImage:'url("img/slider/slide-10.jpg")'}} >
            <div className="container h-100 d-table">
                <div className="row d-table-cell align-middle h-100">
                    <div className="col-lg-5">
                        <h3 className="alt-font mb-2 h6 text-uppercase">New Arrivals</h3>
                        <h1 className="display-16 display-sm-8 display-md-5 display-lg-3 mb-1-6 mb-lg-2-9">Decor Inspiration</h1>
                        <a href="shop-product-grid.html" className="butn-style4">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="item bg-img h-100 w-100 cover-background" data-overlay-dark="0" style={{backgroundImage:'url("img/slider/slide-11.jpg")'}}>
            <div className="container h-100 d-table">
                <div className="row d-table-cell align-middle h-100">
                    <div className="col-lg-5">
                        <h3 className="alt-font mb-2 h6 text-uppercase">Offer</h3>
                        <h1 className="display-16 display-sm-8 display-md-5 display-lg-3 mb-1-6 mb-lg-2-9">Sofa Up to 50% OFF</h1>
                        <a href="shop-product-grid.html" className="butn-style4">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="item bg-img h-100 w-100 cover-background" data-overlay-dark="0" style={{backgroundImage:'url("img/slider/slide-13.jpg")'}}>
            <div className="container h-100 d-table">
                <div className="row d-table-cell align-middle h-100">
                    <div className="col-lg-5">
                        <h3 className="alt-font mb-2 h6 text-uppercase">Collection</h3>
                        <h1 className="display-16 display-sm-8 display-md-5 display-lg-3 mb-1-6 mb-lg-2-9">Special Collection</h1>
                        <a href="shop-product-grid.html" className="butn-style4">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
