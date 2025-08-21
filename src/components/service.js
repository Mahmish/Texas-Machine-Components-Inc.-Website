import React from 'react';
import Slider from 'react-slick'; // Import the Slider component from react-slick


// Import your images
import buildingimg from '../assets/images/building-icon.png';
import engineimg from '../assets/images/engine-icon.png';
import aerospaceimg from '../assets/images/aerospace-icon.png';
import serviceimg1 from '../assets/images/service-image-1.jpg';
import serviceimg2 from '../assets/images/service-image-2.jpg';
import serviceimg3 from '../assets/images/service-image-3.jpg';
import { Link } from 'react-router-dom';


// It's good practice to capitalize component names (e.g., Service instead of service)
// and match the filename (Service.js). I'll use `Service` here.
export default function Service() { // Changed 'service' to 'Service' for convention
  // Define your slick carousel settings as a JavaScript object
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
      <section className="services"> {/* Use className instead of class in JSX */}
        <div className="container">
          <div className="row text-center">
            <div className="service-title">
              <h2>Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/>eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>

          <div className="container"> {/* Nested container might be redundant depending on your CSS */}
            <div className="row align-items-center text-center">
              <div className="col-12">
                {/* Replaced the direct jQuery initialization with the React-Slick Slider component */}
                <Slider {...settings}> {/* Pass the settings object as props */}
                  {/* Each direct child of <Slider> will be a slide */}

                  {/* Slide 1 */}
                  <div>
                    <div className="service-box">
                      <div className="service-images">
                        <img src={serviceimg1} alt="Service 1"/>
                      </div>
                      <div className="service-content">
                        <img src={buildingimg} alt="Building Icon"/>
                        <h4>Your Heading Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                          <Link to="/servicePage">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div>
                    <div className="service-box">
                      <div className="service-images">
                        <img src={serviceimg2} alt="Service 2"/>
                      </div>
                      <div className="service-content">
                        <img src={engineimg} alt="Engine Icon"/>
                        <h4>Your Heading Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                          <Link to="/servicePage">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div>
                    <div className="service-box">
                      <div className="service-images">
                        <img src={serviceimg3} alt="Service 3"/>
                      </div>
                      <div className="service-content">
                        <img src={aerospaceimg} alt="Aerospace Icon"/>
                        <h4>Your Heading Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                          <Link to="/servicePage">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duplicated slides from your original code - these will be separate slides */}
                  {/* Slide 4 (Duplicate of Slide 1 content) */}
                  <div>
                    <div className="service-box">
                      <div className="service-images">
                        <img src={serviceimg1} alt="Service 1"/>
                      </div>
                      <div className="service-content">
                        <img src={buildingimg} alt="Building Icon"/>
                        <h4>Your Heading Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                          <Link to="/servicePage">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 5 (Duplicate of Slide 2 content) */}
                  <div>
                    <div className="service-box">
                      <div className="service-images">
                        <img src={serviceimg2} alt="Service 2"/>
                      </div>
                      <div className="service-content">
                        <img src={engineimg} alt="Engine Icon"/>
                        <h4>Your Heading Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                          <Link to="/servicePage">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 6 (Duplicate of Slide 3 content) */}
                  <div>
                    <div className="service-box">
                      <div className="service-images">
                        <img src={serviceimg3} alt="Service 3"/>
                      </div>
                      <div className="service-content">
                        <img src={aerospaceimg} alt="Aerospace Icon"/>
                        <h4>Your Heading Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <div className="service-btn">
                          <Link to="/servicePage">Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}