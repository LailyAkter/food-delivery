import React from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { cartUiAction } from "../../store/shopping-cart/cartUiSlice";
import CartItem from "../Cart/CartItem";

const Header = () =>{
    const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
    const totalAmount = useSelector((state)=>state.cart.totalAmount);
    const showCart = useSelector((state)=>state.cartUi.cartIsVisiable);
    const dispatch = useDispatch();

    const toggleCart = () =>{
        dispatch(cartUiAction.toggle())
    }
    return (
        <>
            <header>
                <div className="header-part header-reduce sticky">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-top-inner">
                                <div className="header-top-left">
                                    <a href="#" className="top-cell"><img src="images/fon.png" alt=""/> <span>123-456-7890</span></a>
                                    <a href="#" className="top-email"><span>support@Rigor.com</span></a>
                                </div>
                                <div className="header-top-right">
                                    <div className="social-top">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="language-menu">
                                        <a href="#" className="current-lang">English <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Bangla</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="header-info">
                                <div className="header-info-inner">
                                    <div className="book-table header-collect book-md">
                                        <Link to="/login">Login</Link>
                                    </div>
                                    <div className="shop-cart header-collect">
                                        <a href="#" onClick={toggleCart}><img src="images/icon-basket.png" alt=""/>{totalQuantity} items - $ {totalAmount}</a>
                                        {showCart && <CartItem/>}
                                    </div>
                                    <div className="search-part">
                                        <a href="#"></a>
                                        <div className="search-box">
                                            <input type="text" name="txt" placeholder="Search"/>
                                            <input type="submit" name="submit" value=" "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-icon">
                                <a href="#" className="hambarger">
                                    <span className="bar-1"></span>
                                    <span className="bar-2"></span>
                                    <span className="bar-3"></span>
                                </a>
                            </div>
                            <div className="book-table header-collect book-sm">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="menu-main">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/menu">Menu</Link>
                                    </li>
                                    <li>
                                        <Link to="contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="logo">
                                <Link to="/"><img src="images/logo.png" alt=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;