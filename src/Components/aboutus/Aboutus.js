import React from 'react'
import Brands from './Brands'
import Counter from './Counter'
import Owner from './Owner'
import Service from './Service'
import Title from '../title'
import { useEffect } from "react";


export default function Aboutus() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const data = "About Us" ;
  return (
    <div>
      <Title message={data}/>
      <Service/>
      <Counter/>
      <Owner/>
      <Brands/>
    </div>
  )
}
