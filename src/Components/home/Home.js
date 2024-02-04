import React from 'react'
import Bannner from './Bannner'
import Category from './Category'
import Product from './Product'
import Services from './Services'
import Slider from './Slider'
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
        <Bannner/>
        {/* Banner Component*/}
        <Services/>
    </div>
    
  )
}
