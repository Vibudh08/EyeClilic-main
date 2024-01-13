import React from 'react'

export default function Form() {
  return (
    <>
    <section class="pt-0 md">
        <div class="container">

            <div class="text-center mb-1-9 mb-lg-2-3">
                <h2 class="mb-0">Get In Touch</h2>
            </div>

            <div class="row">
                <div class="col-lg-10 mx-auto">

                    <form>

                        <div class="row">

                            <div class="col-sm-6">

                                <div class="form-group">
                                    <label>Your Name</label>
                                    <input type="text" class="form-control" name="name" placeholder="Your name here"/>
                                </div>

                            </div>

                            <div class="col-sm-6">

                                <div class="form-group">
                                    <label>Your Email</label>
                                    <input type="email" class="form-control" name="email" placeholder="Your email here"/>
                                </div>

                            </div>

                        </div>

                        <div class="row">

                            <div class="col-sm-6">

                                <div class="form-group">
                                    <label>Company Name</label>
                                    <input type="text" class="form-control" name="companyname" placeholder="Your company name"/>
                                </div>

                            </div>

                            <div class="col-sm-6">

                                <div class="form-group">
                                    <label>Contact Number</label>
                                    <input type="text" class="form-control" name="phone" placeholder="+40-123 456 789"/>
                                </div>

                            </div>

                        </div>

                        <div class="row">

                            <div class="col-12 mb-4">

                                <label>Message</label>
                                <div class="form-group mb-1">
                                    <textarea rows="3" class="form-control" placeholder="Tell us a few words"></textarea>
                                </div>

                            </div>

                        </div>

                        <button type="button" class="butn-style2">Send Message</button>

                    </form>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}
