import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function OrderComplete() {
  return (
    <>
        <Breadcrumb title="Order Complete" />
        <section class="home-icon shop-cart bg-skeen wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="icon-default icon-skeen">
                <img src="images/scroll-arrow.png" alt=""/>
            </div>
            <div class="container">
                <div class="checkout-wrap">
                    <ul class="checkout-bar">
                        <li class="done-proceed">Shopping Cart</li>
                        <li class="done-proceed">Checkout</li>
                        <li class="active done-proceed">Order Complete</li>
                    </ul>
                </div>
                <div class="order-complete-box">
                    <img src="images/complete-sign.png" alt=""/>
                    <p>Thank you for ordering in our restaurant. You will receive a confirmation email shortly.
                        <br/> Now check a Food Tracker progress with your order.</p>
                    <a href="#" class="btn-medium btn-primary-gold btn-large">Go To Food Tracker</a>
                </div>
            </div>
        </section>
    </>
  )
}
