import React from 'react';
import aboutimg1 from '../assets/images/about-us-image1.jpg';
import aboutimg2 from '../assets/images/about-us-image2.jpg';
import playbtn from '../assets/images/play-button.png'


export default function about_us() {
  return (
    <div>
      <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                       <div className="about-us-imagesContainer">
                            <div className="about-us-imag1">
                                <img src={aboutimg2} alt=""/>
                            </div>
                            <div className="play-btn">
                                <img src={playbtn} alt=""/>
                            </div>
                            <div className="about-us-imag2">
                                <img src={aboutimg1} alt=""/>
                            </div>
                       </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 p-0">
                        <div className="about-us-content">
                            <span>ABOUT US</span>
                            <h2>Building Trust <br/>Through metal</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore. <br/>
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                <br/><br/>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi.
                            </p>
                            <div className="learn-more-btn">
                              Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
