import React from 'react'
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { cartUiAction } from '../../store/shopping-cart/cartUiSlice';
import { cartActions } from "../../store/shopping-cart/Cart.js";

export default function CartItem() {
    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const totalAmount = useSelector((state)=>state.cart.totalAmount)

    console.log(cartProducts)
    const dispatch = useDispatch();

    const toggleCart = () =>{
        dispatch(cartUiAction.toggle())
    }
  return (
    <>
      <div className="cart-wrap">
            <div className="cart-blog" onClick={toggleCart}>
                {cartProducts.length === 0 ? <h4>No item added to cart</h4> : (
                    cartProducts.map((item)=>{
                        return(
                            <div className="cart-item">
                                <div className="cart-item-left">
                                    <img src={`../../${item.imageO1}`} alt={item.name}/>
                                </div>
                                <div className="cart-item-right">
                                    <h6>{item.name}
                                    <br/>
                                    <span>{item.qty}</span>
                                    </h6>
                                    <span>$ {item.price}</span>
                                </div>
                                <span className="delete-icon" onClick={()=>dispatch(cartActions.deleteItem(item.id))}></span>
                            </div>
                        )
                    })
                    
                )}
                        
                
                <div className="subtotal">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <h6>Subtotal :</h6>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <span>$ {totalAmount}</span>
                    </div>
                </div>

                <div className="cart-btn">
                    <Link to="/cart" className="btn-black view">VIEW ALL</Link>
                    <Link to="/checkout" className="btn-main checkout" onClick={toggleCart}>CHECK OUT</Link>
                </div>
            </div>
        </div>

    </>
  )
}
