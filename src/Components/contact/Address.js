import React from 'react'
import {Link} from 'react-router-dom'

export default function Address() {
  return (
    <>
    <section class="pt-0">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-6 mb-1-9 mb-md-0">

                    <div class="store-details">
                        <div class="contact-img">
                            <img src="img/team/shop1.jpg" alt="..."/>
                        </div>
                        <div class="info-box">
                            <h5>Kannauj, INDIA</h5>
                            <ul class="mb-0 list-unstyled">
                                <li class="mb-4">
                                    <div class="d-flex align-top">
                                        <div class="info-icon">
                                            <i class="ti-location-pin"></i>
                                        </div>
                                        <div class="ps-4">
                                            <h6 class="info-label">Find us</h6>
                                            <Link to="/">Netra Jyoti Eye Clinic Near Gosaidaspur Chauraha, Kannuaj, INDIA</Link>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-4">
                                    <div class="d-flex align-top">
                                        <div class="info-icon">
                                            <i class="ti-mobile"></i>
                                        </div>
                                        <div class="ps-4">
                                            <h6 class="info-label">Call us</h6>
                                            <Link to="/">+91 9918453439</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-top">
                                        <div class="info-icon">
                                            <i class="ti-email"></i>
                                        </div>
                                        <div class="ps-4">
                                            <h6 class="info-label">Write us</h6>
                                            <Link to="/">bpratap060@gmail.com</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
    </section>
    </>
  )
}
