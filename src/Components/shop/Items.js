import React from 'react'

export default function Items() {
  return (
    <>
    <div class="col-11 col-sm-6 col-xl-4 mb-1-9">
    <div class="product-grid">
        <div class="product-img">
            <a href="shop-product-detail.html"><img src="img/product-categories/product-03.jpg" alt="..."/></a>
        </div>
        <div class="product-description">
            <h3><a href="shop-product-detail.html">Apple iPhone X</a></h3>
            <h4 class="price">
                            <span class="offer-price">$1214.50</span>
                        </h4>
        </div>
        <div class="product-buttons">
            <ul class="ps-0">
                <li><a href="/" class="btn-link" title="Add To Wishlist"><i class="far fa-heart"></i></a></li>
                <li><a href="/" class="butn-style2" title="Add to Cart">Add to Cart</a></li>
                <li><a href="/" class="btn-link" title="Add To Compare"><i class="fas fa-random"></i></a></li>
            </ul>
        </div>
    </div>
</div>
    </>
  )
}
