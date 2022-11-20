import React from 'react'
import {Link} from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import {useSelector,useDispatch} from 'react-redux';
import { cartActions } from "../../store/shopping-cart/Cart.js";

export default function Cart() {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const totalAmount = useSelector((state)=>state.cart.totalAmount)
    const shipping_amount = Number(15);

    const total = totalAmount + shipping_amount;

    //  const incrementCart = () =>{
    //     dispatch(cartActions.addItem())
    // }

  return (
    <>
        <Breadcrumb title="Cart"/>
        <section className="home-icon shop-cart bg-skeen">
            <div className="icon-default icon-skeen">
                <img src="images/scroll-arrow.png" alt=""/>
            </div>
            <div className="container">
                <div className="checkout-wrap wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <ul className="checkout-bar">
                        <li className="active">Shopping Cart</li>
                        <li>Checkout</li>
                        <li>Order Complete</li>
                    </ul>
                </div>
                <div className="shop-cart-list wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <table className="shop-cart-table">
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProducts.length === 0  ? <h3 className='text-center'>No item added to cart</h3> :
                                (
                                    cartProducts.map((product)=>{
                                        return(
                                            <tr>
                                                <th>PRODUCT</th>
                                                <td>
                                                    <div className="product-cart">
                                                        <img style={{height:'98px',width:'98px'}} src={product.imageO1} alt={product.name}/>
                                                    </div>
                                                    <div className="product-cart-title">
                                                        <span>{product.name}</span>
                                                        <br/>
                                                        <span>1*{product.qty}</span>
                                                    </div>
                                                </td>
                                                <th>PRICE</th>
                                                <td>
                                                    <strong>${product.price}</strong>
                                                    {/* <del>$5400.00</del> */}
                                                </td>
                                                <th>QUANTITY</th>
                                                <td>
                                                    <div className="price-textbox">
                                                        <span className="minus-text"><i onClick={()=>dispatch(cartActions.removeItem(product.id))} className="fa fa-minus" aria-hidden="true"></i></span>
                                                        <input name="txt" placeholder={product.qty} type="text"/>
                                                        <span className="plus-text"><i onClick={()=>dispatch(cartActions.addItem(product))} className="fa fa-plus" aria-hidden="true"></i></span>
                                                    </div>
                                                </td>
                                                <th>TOTAL</th>
                                                <td>
                                                    ${product.totalPrice}
                                                </td>
                                                <td className="shop-cart-close"><i onClick={()=>dispatch(cartActions.deleteItem(product.id))} className="fa fa-times" aria-hidden="true"></i></td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                            
                        </tbody>
                    </table>
                    <div className="product-cart-detail">
                        <div className="cupon-part">
                            <input type="text" name="txt" placeholder="Cupon Code"/>
                        </div>
                        <a href="#" className="btn-medium btn-dark-coffee">Apply Coupon</a>
                    </div>
                </div>
                <div className="cart-total wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="cart-total-title">
                        <h5>CART TOTALS</h5>
                    </div>
                    <div className="product-cart-total">
                        <small>Total products</small>
                        <span>${totalAmount}</span>
                    </div>
                    <div className="product-cart-total">
                        <small>Total shipping</small>
                        <span>${shipping_amount}</span>
                    </div>
                    <div className="grand-total">
                        <h5>TOTAL <span>${total}</span></h5>
                    </div>
                    <div className="proceed-check">
                        <Link to="/checkout" className="btn-primary-gold btn-medium">PROCEED TO CHECKOUT</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
