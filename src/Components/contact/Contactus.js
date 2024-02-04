import React from 'react'
import {Link} from 'react-router-dom';
import Address from './Address'
import Form from './Form';
import Map from './Map';
import Title from '../title'
import { useEffect } from "react";

export default function Contactus() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    const data = "Contact Us";
  return (
    <>
    {/* Title */}
      <Title message={data} />

      {/* Contact Details */}
      <section class="md">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="contact-info rounded h-100">
                            <div class="contact-icon">
                                <i class="ti-mobile"></i>
                            </div>
                            <h3 class="display-29 font-weight-500 mb-2">Phone Numbers</h3>
                            <ul class="mb-0 list-unstyled">
                                <li><Link to="/">+91 9918453439</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="contact-info rounded h-100">
                            <div class="contact-icon">
                                <i class="ti-location-pin"></i>
                            </div>
                            <h3 class="display-29 font-weight-500 mb-2">Location</h3>
                            <p class="mb-0">Netra Jyoti Eye Clinic Near Gosaidaspur Chauraha
                                <br/> Kannuaj, India</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-info rounded h-100">
                            <div class="contact-icon">
                                <i class="ti-email"></i>
                            </div>
                            <h3 class="display-29 font-weight-500 mb-2">Email Address</h3>
                            <ul class="mb-0 list-unstyled">
                                <li><Link to="/">bpratap060@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Address */}
        <Address/>

        {/* Form */}
        <Form/>

        {/* Map Location */}
        <Map/>
    </>
  )
}
