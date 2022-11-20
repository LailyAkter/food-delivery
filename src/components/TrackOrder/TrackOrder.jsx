import React  from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const TrackOrder = () =>{
    return(
        <>
            <Breadcrumb title="Track Order"/>
            <section className="home-icon shop-cart bg-skeen">
                <div className="icon-default icon-skeen">
                    <img src="images/scroll-arrow.png" alt=""/>
                </div>
                <div className="container">
                    <div className="checkout-wrap checkout-wrap-more wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <ul className="checkout-bar">
                            <li className="done-proceed">Order Placed</li>
                            <li className="done-proceed">Preparing</li>
                            <li className="active">Bake</li>
                            <li>Box</li>
                            <li>Delivery</li>
                        </ul>
                    </div>
                    <div className="track-oder wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div className="track-oder-inner">
                            <div className="clock-track-icon">
                                <img src="images/clock-icon.png" alt=""/>
                            </div>
                            <div className="track-status">
                                <h3><span>Order Status:</span> <br/> We are now baking your Coffee</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrackOrder;