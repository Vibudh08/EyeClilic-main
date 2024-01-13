import React from 'react'
import Banner from './home/Bannner'
import Category from './home/Category'
import Product from './home/Product'
import Services from './home/Services'
import Slider from './home/Slider'


export default function Home() {
  return (
        <div>
        {/* Slider */}

        <Slider/>

        {/* Category Component*/}
        <Category/>

        {/* product Component*/}
        <Product/>

        {/* Banner Component*/}
        <Banner/>
        {/* Banner Component*/}
        <Services/>
    </div>
    
  )
}
