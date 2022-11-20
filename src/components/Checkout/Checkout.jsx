import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function Checkout() {

    const [billingItem,setBillingItem] = useState('')

    const handleBillingClick = (event) => {
        setBillingItem([event.target.name] = event.target.value)
        // console.log(billingItem)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(billingItem)
    }
  return (
    <>
        <Breadcrumb title="Checkout" />
        <section className="home-icon shop-cart bg-skeen">
            <div className="icon-default icon-skeen">
                <img src="images/scroll-arrow.png" alt=""/>
            </div>
            <div className="container">
                <div className="checkout-wrap">
                    <ul className="checkout-bar">
                        <li className="done-proceed">Shopping Cart</li>
                        <li className="active">Checkout</li>
                        <li>Order Complete</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-7 col-sm-7 col-xs-12">
                        <div className="shop-checkout-left">
                            <h6>Returning customer? Click here to <Link to="/login">login</Link></h6>
                            <form className="form-checkout" name="form" onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h5>Billing Details</h5>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <input 
                                            type="text" 
                                            name="firstname" 
                                            placeholder="First Name" 
                                            // value={billingItem.firstname} 
                                            onChange={handleBillingClick}
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <input 
                                            type="text" 
                                            name="lastname" 
                                            placeholder="Last Name" 
                                            // value={billingItem.lastname} 
                                            onChange={handleBillingClick}
                                        />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input 
                                            type="text" 
                                            name="companyname" 
                                            placeholder="Company Name" 
                                            // value={billingItem.companyname} 
                                            onChange={handleBillingClick}
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email" 
                                            onChange={handleBillingClick}
                                            // value={billingItem.email} 
                                        />
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            placeholder="Phone" 
                                            onChange={handleBillingClick}
                                            // value={billingItem.phone} 
                                        />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <select className="select-dropbox" name='country' onChange={handleBillingClick}>
                                            <option>Country</option>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>London</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <textarea onChange={handleBillingClick} name='address' placeholder="Address"></textarea>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>
                                            <input type="checkbox" name="checkbox"/>Create an account ?</label>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h5>Shipping Address</h5>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>
                                            <input type="checkbox" name="checkbox"/>Ship to a different address ?</label>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <textarea placeholder="Order Notes"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12">
                        <div className="shop-checkout-right">
                            <div className="shop-checkout-box">
                                <h5>YOUR ORDER</h5>
                                <div className="shop-checkout-title">
                                    <h6>PRODUCT <span>TOTAL</span></h6>
                                </div>
                                <div className="shop-checkout-row">
                                    <p><span>Rocha Sleeve Sweater</span> x1 <small>$140.00</small></p>
                                    <p><span>Mauris Tincidunt</span> x6 <small>$140.00</small></p>
                                </div>
                                <div className="checkout-total">
                                    <h6>CART SUBTOTAL <small>$140.00</small></h6>
                                </div>
                                <div className="checkout-total">
                                    <h6>SHIPPING <small>Free Shipping</small></h6>
                                </div>
                                <div className="checkout-total">
                                    <h6>ORDER TOTAL <small className="price-big">$140.00</small></h6>
                                </div>
                            </div>
                            <div className="shop-checkout-box">
                                <h5>PAYMENT METHODS</h5>
                                <label>
                                    <input type="radio" name="radio"/>Direct Bank Transfer</label>
                                <p>Make your payment directly into our bank account. Please use your cleared in our account.</p>
                                <div className="payment-mode">
                                    <label>
                                        <input type="radio" name="radio"/>Check Payments</label>
                                </div>
                                <div className="payment-mode">
                                    <label>
                                        <input type="radio" name="radio"/>Cash on Delivery</label>
                                </div>
                                <div className="payment-mode">
                                    <label>
                                        <input type="radio" name="radio"/> PayPal</label> <a href="#"><img src="images/paycart.png" alt=""/></a><a href="#">What is PayPal?</a>
                                </div>
                                <div className="checkout-terms">
                                    <label>
                                        <input type="checkbox" name="checkbox"/>I’ve read and accept the terms &amp; conditions *</label>
                                </div>
                                <div className="checkout-button">
                                    <button className="button-default btn-large btn-primary-gold">PROCEED TO PAYMENT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
