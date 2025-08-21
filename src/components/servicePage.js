import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import buildingimg from '../assets/images/building-icon.png';
import engineimg from '../assets/images/engine-icon.png';
import aerospaceimg from '../assets/images/aerospace-icon.png';
import serviceimg1 from '../assets/images/service-image-1.jpg';
import serviceimg2 from '../assets/images/service-image-2.jpg';
import serviceimg3 from '../assets/images/service-image-3.jpg';
import { Link } from 'react-router-dom';

export default function Service() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true, // Common setting for continuous looping
    speed: 500,     // Transition speed in milliseconds
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800, // You might consider 768px as a more common breakpoint for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
        <section className="title">
        <div className="Pagesbackground-image">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-6">
                            <div className="title-content">
                                <h1>Service Details</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
      <section className="services">
        {/* <div className="container"> */}
          
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* The Slider component takes settings as props and its children become the slides */}
                <Slider {...settings}>
                  {/* Slide 1 */}
                  <div>
                    <div className="service-box">
                        <div className="service-images">
                        <img src={serviceimg1} alt="Construction Service" />
                        </div>
                        <div className="service-content">
                        <img src={buildingimg} alt="Building Icon" />
                        <h4>Construction Services</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                            <Link to="/serviceDetails">Read More</Link>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div>
                    <div className="service-box">
                        <div className="service-images">
                        <img src={serviceimg2} alt="Engineering Service" />
                        </div>
                        <div className="service-content">
                        <img src={engineimg} alt="Engine Icon" />
                        <h4>Engineering Solutions</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                            <Link to="/serviceDetails">Read More</Link>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div>
                    <div className="service-box">
                        <div className="service-images">
                        <img src={serviceimg3} alt="Aerospace Service" />
                        </div>
                        <div className="service-content">
                        <img src={aerospaceimg} alt="Aerospace Icon" />
                        <h4>Aerospace Innovations</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                            <Link to="/serviceDetails">Read More</Link>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* Slide 4 (Example Duplicate for more slides) */}
                  <div>
                    <div className="service-box">
                        <div className="service-images">
                        <img src={serviceimg1} alt="Architecture Design" />
                        </div>
                        <div className="service-content">
                        <img src={buildingimg} alt="Building Icon" />
                        <h4>Architecture Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                            <Link to="/serviceDetails">Read More</Link>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* Slide 5 (Example Duplicate for more slides) */}
                  <div>
                    <div className="service-box">
                        <div className="service-images">
                        <img src={serviceimg2} alt="Mechanical Engineering" />
                        </div>
                        <div className="service-content">
                        <img src={engineimg} alt="Engine Icon" />
                        <h4>Mechanical Engineering</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                            <Link to="/serviceDetails">Read More</Link>
                        </div>
                        </div>
                  </div>

                  </div>
                  {/* Slide 6 (Example Duplicate for more slides) */}
                  <div>
                    <div className="service-box">
                        <div className="service-images">
                        <img src={serviceimg3} alt="Aviation Services" />
                        </div>
                        <div className="service-content">
                        <img src={aerospaceimg} alt="Aerospace Icon" />
                        <h4>Aviation Services</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                            <Link to="/serviceDetails">Read More</Link>
                        </div>
                        </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}