import React from 'react'
import Items from './Items'


export default function rightpanel() {
  return (
   <>
   <div class="col-lg-9 col-12 ps-lg-1-9 order-1 order-lg-2 mb-1-9 mb-lg-0">

   <div class="row g-0 align-items-center bg-light rounded p-3 mb-1-9">

       <div class="col-12 col-md my-1 my-md-0 text-center text-md-start font-weight-600">Showing 1–9 of 27 results</div>

       <div class="col-12 col-md-auto">

           <div class="row justify-content-center">

               <div class="col-auto my-1 my-md-0">
                   <label class="m-0">Show:</label>
                   <select class="w-auto d-inline-block form-select">
                       <option value="/?limit=24" selected="selected">24</option>
                       <option value="/?limit=25">25</option>
                       <option value="/?limit=50">50</option>
                       <option value="/?limit=75">75</option>
                       <option value="/?limit=100">100</option>
                   </select>
               </div>

               <div class="col-auto my-1 my-md-0">
                   <label class="m-0">Sort By:</label>
                   <select class="w-auto d-inline-block form-select">
                       <option value="/?sort=p.sort_order&amp;order=ASC">Default</option>
                       <option value="/?sort=pd.name&amp;order=ASC">Name (A - Z)</option>
                       <option value="/?sort=pd.name&amp;order=DESC">Name (Z - A)</option>
                       <option value="/?sort=p.price&amp;order=ASC" selected="">Price (Low &gt; High)</option>
                       <option value="/?sort=p.price&amp;order=DESC">Price (High &gt; Low)</option>
                       <option value="/?sort=rating&amp;order=DESC">Rating (Highest)</option>
                       <option value="/?sort=rating&amp;order=ASC">Rating (Lowest)</option>
                       <option value="/?sort=p.model&amp;order=ASC">Model (A - Z)</option>
                       <option value="/?sort=p.model&amp;order=DESC">Model (Z - A)</option>
                   </select>
               </div>

           </div>

       </div>

   </div>

   <div class="row justify-content-center">

    <Items/>
    <Items/>
    <Items/>
    <Items/>
    <Items/>
    <Items/>

   </div>

  
   <div class="pagination text-small text-uppercase text-extra-dark-gray mt-4">
       <ul>
           <li><a href="/"><i class="fas fa-long-arrow-alt-left me-1 d-none d-sm-inline-block"></i> Prev</a></li>
           <li class="active"><a href="/">1</a></li>
           <li><a href="/">2</a></li>
           <li><a href="/">3</a></li>
           <li><a href="/">Next <i class="fas fa-long-arrow-alt-right ms-1 d-none d-sm-inline-block"></i></a></li>
       </ul>
   </div>
  

</div>
   </>
  )
}
