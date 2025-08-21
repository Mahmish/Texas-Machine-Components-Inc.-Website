import React from 'react'

export default function checkout() {
  return (
      <div>
           <section className="title">
            <div className="Pagesbackground-image">
                    <div className="container">
                        <div className="row text-white">
                                <div className="title-content">
                                    <h1>Checkout</h1>
                                </div>
                        </div>
                    </div>
            </div>
    </section>

   <section>
        <div className="checkout-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 col-xl-6">
                        <div className="billing-details">
                          <h2>Billing Details</h2>
                            <form>
                                <div className="row">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="First Name"/><br/>
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Last Name"/><br/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Company Name"/><br/>
                                </div>

                                <div className="form-group">
                                    <select className="form-control">
                                    <option value="">Select Country</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="IN">India</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                    <option value="SA">Saudi Arabia</option>
                                    </select><br/>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Street Address"/><br/>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Apartment, Suite, Unit, etc (optional)"/><br/>
                                </div>  

                                <div className="row">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Town / City"/><br/>
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="State"/><br/>
                                    </div>
                                </div>  

                                <div className="row">
                                    <div className="col">
                                    <input type="number" className="form-control" placeholder="Zip"/><br/>
                                    </div>
                                    <div className="col">
                                    <input type="number" className="form-control" placeholder="Phone"/><br/>
                                    </div>
                                </div> 

                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address"/><br/>
                                </div>                                   
                                </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6 col-sm-12 col-12 col-xl-6">
                        <div className="your-order">
                            <h2>Your Order</h2>
                            <h3>Product</h3>
                            <hr/>
                                <div className="product-item">
                                    <span>Lorem Ipsum</span>
                                    <span>$40.00</span>
                                </div>
                                <div className="product-item">
                                    <span>Lorem Ipsum</span>
                                    <span>$60.00</span>
                                </div>
                                <div className="product-item">
                                    <span><strong>Subtotal</strong></span>
                                    <span>$100.00</span>
                                </div>
                                <h4>Shipping</h4>
                                <div className="shipping-option">
                                    <label className="flex items-center">
                                        <input type="radio" name="shipping"/>
                                        <span>Free Shipping</span>
                                    </label>
                                </div>
                                <div className="shipping-option">
                                    <label className="flex items-center">
                                        <input type="radio" name="shipping"/>
                                        <span>Local Shipping</span>
                                    </label>
                                </div>
                                <div className="shipping-option">
                                    <label className="flex items-center">
                                        <input type="radio" name="shipping"/>
                                        <span>Flat Rate: $05.00</span>
                                    </label>
                                </div>
                            <hr/>
                            <div className="total">
                                <span><strong>Total</strong></span>
                                <span>$100.00</span>
                            </div>
                            <hr/>
                            <h4>Payment Methods</h4>
                                <div className="payment-method">
                                    <label className="flex items-center">
                                        <input type="radio" name="payment"/>
                                        <span>Direct Bank Transfer</span>
                                    </label>
                                </div>
                                <p className="payment-method-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis
                                </p>
                                <div className="payment-method">
                                    <label className="flex items-center">
                                        <input type="radio" name="payment"/>
                                        <span>Cheque Payment</span>
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <label className="flex items-center">
                                        <input type="radio" name="payment"/>
                                        <span>Cash On Delivery</span>
                                    </label>
                                </div>
                                <div className="payment-method">
                                    <label className="flex items-center">
                                        <input type="radio" name="payment"/>
                                        <span>Paypal</span>
                                    </label>
                                </div>
                                <hr/>
                                <button className="place-order-button">Place Order</button>
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
