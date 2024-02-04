import React from 'react'
import {Link} from 'react-router-dom'

export default function Category() {
    const data ={
        name :['Bathroom','Dinning Table','Chair','Soafs','Cupboard','Bedroom'],
        img :[4,5,6,7,8,9]
    }
    return (
        <div>
          <section>
            <div className="container">
              <div className="row mt-n1-9 text-center">
                {data.name.map((category, index) => (
                  <div key={index} className="col-sm-6 col-md-4 col-lg-2 mt-1-9">
                    <Link to="/" className="categoty-style2">
                      <div className="category-icon mb-4">
                        {/* Assuming that the images are named as 'icon-1.png', 'icon-2.png', etc. */}
                        <img src={`img/icons/icon-${data.img[index]}.png`} alt={`Icon for ${category}`} />
                      </div>
                      <h3 className="font-weight-500 mb-0">{category}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
