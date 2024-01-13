import React from 'react'
import Brands from './Brands'
import Counter from './Counter'
import Owner from './Owner'
import Service from './Service'
import Title from './title'

export default function Aboutus() {
  return (
    <div>
      <Title/>
      <Service/>
      <Counter/>
      <Owner/>
      <Brands/>
    </div>
  )
}
