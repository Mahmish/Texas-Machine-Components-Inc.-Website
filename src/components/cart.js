import React from 'react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';
import { Link } from 'react-router-dom';

export default function cart() {
  return (
      <div>
    <section class="title">
        <div class="Pagesbackground-image">
                <div class="container">
                    <div class="row text-white">
                        <div class="col-lg-6">
                            <div class="title-content">
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

        <section>
        <div class="section-container">
            <div class="container">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src={product1} alt=""/>
                                <span>Your Title Here</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                        <td><div class="quantity-btn">
                            <span class="button-symbol">-</span>
                            <span class="quantity-number">1</span>
                            <span class="button-symbol">+</span>
                        </div></td>
                        <td>$123.45</td>
                    </tr>
                     <tr>
                        <td>
                            <div class="cart-info">
                                <img src={product2} alt=""/>
                                <span>Your Title Here</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                        <td><div class="quantity-btn">
                            <span class="button-symbol">-</span>
                            <span class="quantity-number">1</span>
                            <span class="button-symbol">+</span>
                        </div></td>
                        <td>$123.45</td>
                    </tr>
                     <tr>
                        <td>
                            <div class="cart-info">
                                <img src={product3} alt=""/>
                                <span>Your Title Here</span>
                            </div>
                        </td>
                        <td>$123.45</td>
                        <td><div class="quantity-btn">
                            <span class="button-symbol">-</span>
                            <span class="quantity-number">1</span>
                            <span class="button-symbol">+</span>
                        </div></td>
                        <td>$123.45</td>
                    </tr>
                </table>
                <div class="cart-btn align-items-center">
                    <div class="continue-shipping">
                    <Link>Continue Shopping</Link>
                    </div>
                    <div class="update-cart">
                    <div class="checkoutcart">
                        <Link to="/checkout">Checkout</Link>
                    </div>
                    <div class="update">
                        <i class="fa-solid fa-arrows-rotate"></i>
                        <Link>Update Cart</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-Details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-xl-3 col-md-3 col-12 col-sm-6">
                        <div class="product-detailsContent">
                            <div>
                                <img src={product1} alt=""/>
                                <div class="star-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span> $420.00 <strong>$390.00</strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-3 col-md-3 col-12 col-sm-6">
                        <div class="product-detailsContent">
                            <div>
                                <img src={product2} alt=""/>
                                <div class="star-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span> $420.00 <strong>$390.00</strong></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-3 col-md-3 col-12 col-sm-6">
                        <div class="product-detailsContent">
                            <div>
                                <img src={product3} alt=""/>
                                <div class="star-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span> $420.00 <strong>$390.00</strong></span>
                            </div>
                        </div>
                    </div>
                     <div class="col-lg-3 col-xl-3 col-md-3 col-12 col-sm-6">
                        <div class="product-detailsContent">
                            <div>
                                <img src={product4} alt=""/>
                                <div class="star-icon">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <h4>Your Heading Here</h4>
                                <span> $420.00 <strong>$390.00</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>


          <hr />
      </div>
  )
}
