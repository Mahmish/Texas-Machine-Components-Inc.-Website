import React from 'react';
import productimage from  '../assets/images/product-details-img.jpg';
import visa1 from  '../assets/images/visa.jpg';
import visa2 from  '../assets/images/o.jpg';
import visa3 from  '../assets/images/online-icon.jpg';
import { Link } from 'react-router-dom';


export default function productPage() {
  return (
    <div>
        <section className="title">
        <div className="Pagesbackground-image">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-6">
                            <div className="title-content">
                                <h1>Product Details</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>

        <section>
                <div className="section-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="productDetails-content">
                                    <div>
                                        <div className="star-icon">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span> $420.00 <strong>$390.00</strong></span>
                                        <h4>Your Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqua. Ut enim ad minim veniam, quis nostrud  <br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo  <br/>consequat. Duis aute irure dolor in reprehe. </p>
                                    </div>
                                    <div>
                                        <div className="quantity">
                                                <div className="mb-8">
                                                    <label>QUANTITY</label>
                                                    <div className="quantityButton">
                                                        <button className="quantity-button">-</button>
                                                        <input className="quantity-input" placeholder="1"/>
                                                        <button className="quantity-button">+</button>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="order-btn">
                                            <Link to="/cart">ADD TO CART  
                                            <i className="fa-solid fa-cart-shopping"></i></Link>
                                        </div>
                                        <div className="offers">
                                            <p>Free Shipping & Returns: On all orders over $75</p>
                                            <p>Estimated Delivery: Oct 07 - Oct 11</p>
                                            <div className="card-icons">
                                                <img src={"../images/paypal.jpg"} alt=""/>
                                                <img src={visa3} alt=""/>
                                                <img src={visa2} alt=""/>
                                                <img src={visa1} alt=""/>
                                            </div>
                                            <p>Guaranteed Safe Checkout</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="productDetail-image">
                                    <img src={productimage} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Product Description </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Shipping & Return </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Shipping policies </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Product reviews</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur </div>
                                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur </div>
                                <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                , eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur </div>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
    </div>
  )
}
