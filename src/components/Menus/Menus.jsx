import React, { useState,useEffect } from "react";
import products from "../Data/Data.js"
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { cartActions } from "../../store/shopping-cart/Cart.js";
import Breadcrumb from "../Breadcrumb/Breadcrumb.jsx";

const Menus = () =>{
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("all");
    const [items,setItem] = useState([]);


    useEffect(() => {
        setItem(products);
    }, []);

    useEffect(() => {
        setItem([]);

        const filtered = products.map(p => ({
        ...p,
        filtered: p.category.includes(filter)
        }));
        setItem(filtered);
    }, [filter]);

    // const addToCart = (id) =>{
    //     dispatch(cartActions.addItem(items[id]))
    // }
    return (
        <>
            <Breadcrumb title="menu"/>
            <section className="home-icon blog-main-section shop-page">
                <div className="icon-default">
                    <img src="images/scroll-arrow.png" alt=""/>
                </div>
                <div className="container">
                    <div className="portfolioFilter">
                        <div className="portfolioFilter-inner bg-skeen">
                            <a  onClick={() => setFilter(products)}>ALL</a>
                            <a  onClick={() => setFilter("breakfast")}>BREAKFAST</a>
                            <a  onClick={() => setFilter("dessert")}>DESSERT</a>
                            <a  onClick={() => setFilter("dinner")}>DINNER</a>
                            <a  onClick={() => setFilter("freshfood")}>FRESHFOOD</a>
                            <a  onClick={() => setFilter("lunch")}>LUNCH</a>
                        </div>
                    </div>
                    <div className="portfolioContainer row">
                        {items.map((item)=>{ 
                            // console.log(item)
                            // const [smallPrice, mediumPrice,largePrice] = item.price;
                            return(
                                item.filtered === true ?
                               ( <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="shop-main-list">
                                        <div className="shop-product">
                                            <Link to={`/menu/${item.id}/${item.name}`}><img src={item.imageO1} alt={item.name}/></Link>
                                            <div className="cart-overlay-wrap">
                                                <div className="cart-overlay">
                                                    <button className="shop-cart-btn" onClick={()=>dispatch(cartActions.addItem(item))}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/menu/${item.id}/${item.name}`}><h5>{item.name}</h5></Link>
                                        <h5><strong>$ {item.price}</strong></h5>
                                    </div>
                                </div>
                                
                                ) : ''
                            )
                        })}
                        
                    </div>
                    <div className="gallery-pagination">
                        <div className="gallery-pagination-inner">
                            <ul>
                                <li><a href="#" className="pagination-prev"><i className="fa fa-arrow-left" aria-hidden="true"></i> <span>PREV page</span></a></li>
                                <li className="active"><a href="#"><span>1</span></a></li>
                                <li><a href="#"><span>2</span></a></li>
                                <li><a href="#"><span>3</span></a></li>
                                <li><a href="#" className="pagination-next"><span>next page</span> <i className="fa fa-arrow-right" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menus;