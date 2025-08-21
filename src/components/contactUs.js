import React from 'react';
import profile from '../assets/images/client-views-pic.png';
import quotes from '../assets/images/quotes.png';
import { Link } from 'react-router-dom';


export default function contactUs() {
  return (
    <div>
      <section>
        <div className="contactUs-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-0">
                        <div className="client-views">
                            <h4>Testimonials</h4>
                            <h2>Clients Say</h2>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className="profile-card">
                                <div className="profile-info-group">
                                    <div className="profile-picture-container">
                                        <img src={profile} alt=""/>
                                        </div>
                                    <div className="text-info">
                                        <h3>Jane Doe</h3>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                                <div className="quotes-icon">
                                <img src={quotes} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-0">
                        <div className="contact-info text-white">
                             <h2>Contact Us</h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                             <div className="contact-icon">
                                <Link><div className="phoneInfo">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>2149492548</span>
                                </div></Link>
                                <hr/>
                               <Link><div className="emailInfo">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>Jeff.goff@texasmci.com</span>
                                </div></Link>
                                <hr/>
                                <Link><div className="locationInfo">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>215 Dahi</span>
                                </div></Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </section>
          <hr/>
    </div>
  )
}
