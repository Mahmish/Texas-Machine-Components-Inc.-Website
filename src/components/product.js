import React from 'react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';
import {Link} from 'react-router-dom';


export default function product() {
  return (
    <div>
      <section>
        <div className="product ">
            <div className="product-image">
                <div className="container">
                    <div className="row text-center">
                            <div className="product-content">
                                <h2>Products</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor br incididunt ut labore.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section>
        <div className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <Link to="productPage"><div className="product-details-image">
                                <img src={product1} alt=""/>
                            <div className="product-details-content">
                                <div className="star-Icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span><del> $420.00 </del><strong>$390.00</strong></span>
                            </div>
                        </div></Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <Link to="productPage"><div className="product-details-image">
                            <img src={product2} alt=""/>
                            <div className="product-details-content">
                                <div className="star-Icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span><del> $420.00 </del><strong>$390.00</strong></span>
                            </div>
                        </div></Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <Link to="/productPage">
                        <div className="product-details-image">
                            <img src={product3} alt=""/>
                            <div className="product-details-content">
                                <div className="star-Icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span><del> $420.00 </del><strong>$390.00</strong></span>
                            </div>
                        </div></Link>
                    </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <Link to="/productPage"><div className="product-details-image">
                        <img src={product4} alt=""/>
                            <div className="product-details-content">
                                <div className="star-Icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span><del> $420.00 </del><strong>$390.00</strong></span>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
