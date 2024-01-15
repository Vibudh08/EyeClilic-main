import React from 'react'
import Banner from './home/Bannner'
import Category from './home/Category'
import Product from './home/Product'
import Services from './home/Services'
import Slider from './home/Slider'
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
