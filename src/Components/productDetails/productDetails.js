import React from 'react'
import Product from './product';
import Title from '../title';

export default function productDetails() {
  const data = "Shop Details";
  return (
    <>
      <Title  message={data} />
      <section class="md">
        <div class="container">
            <Product />
        </div>
      </section>
    </>
  )
}
