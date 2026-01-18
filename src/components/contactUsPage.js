import React from 'react';
import telephone from '../assets/images/phone.png';
import mail from '../assets/images/mail1.png';
import location from '../assets/images/location.png';


export default function contactUsPage() {
  return (
    <div>
       <section className="title">
        <div className="Pagesbackground-image">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-6">
                            <div className="title-content">
                                <h1>Contact US</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

   <section>
        <div className="contactUs-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 p-0">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.07330698989!2d67.0659009748266!3d24.8613457452231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f06125e618f%3A0x3fc2f68336bd478a!2sSKILLS%20360%20SMC%20PRIVATE%20LIMITED!5e0!3m2!1sen!2s!4v1749975432888!5m2!1sen!2s" title="Contact Form" width="698" height="593"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                            <div className="contact-form">
                                <h3>Your Details</h3>
                                <form>
                                    <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Name"/><br/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Phone"/><br/>
                                    </div>
                                    </div>                          
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"/><br/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="Message" rows="4" cols="12" className="form-control" placeholder="Write Message"></textarea><br/>
                                    </div>
                                    <button type="submit" className="form-control">SEND MESSAGE</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
                <div className="contact-usIcons">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-4  p-0">
                            <div className="phone-Info text-center">
                                <img src={telephone} alt=""/>
                                <div>
                                    <h5>Telephone</h5>
                                    <span>2149492548</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="location-Info text-center">
                                <img src={location} alt=""/>
                                <div>
                                    <h5>Address</h5>
                                    <span>215 Dahi</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="email-Info text-center">
                                <img src={mail} alt=""/>
                                <div>
                                    <h5>Email</h5>
                                    <span>Jeff.goff@texasmci.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </section>
    </div>
  )
}
