import react, { useState } from "react";
import {useParams} from 'react-router-dom';
import Breadcrumb from "../Breadcrumb/Breadcrumb.jsx";
import products from "../Data/Data.js"
import {useDispatch,useSelector} from "react-redux";
import { cartActions } from "../../store/shopping-cart/Cart.js";

const Menu  = () =>{
    const  {id } = useParams();
    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const product = products.find((product) => product.id == id); 
    const { imageO1,image02,image03,image04, name,desc,price,category,qty} = product;
    const [categor01,category02]  = category;
    // const [small, medium,large] = sizes;
    // const [smallPrice, mediumPrice,largePrice] = price;
    // const [size,setSize] = useState(mediumPrice);
    const [image,setImage] = useState(imageO1);
    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(cartActions.addItem({
            id,imageO1,name,desc,price,qty
        }))
    }

    const incrementCart = () =>{
        dispatch(cartActions.addItem({
            id,imageO1,name,desc,price,qty
        }))
    }

    const decrementCart = () =>{
        dispatch(cartActions.deleteItem(id))
    }
    return (
        <>
            <Breadcrumb title={name}/>
            <section className="home-icon shop-single pad-bottom-remove" style={{paddingTop:"70px",marginBottom: "70px"}}>
                <div className="icon-default">
                    <img src="../../images/scroll-arrow.png" alt=""/>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="">
                                <div>
                                    <img  style={{width: "550px",height: "408px"}} src={`../../${image}`} alt={name}/>
                                </div>
                            </div>
                            <div className=" slick-shop-thumb row">
                                <div className="col-lg-2 col-md-2 col-sm-2 "><img onClick={()=>setImage(imageO1)}  src={`../../${imageO1}`} alt={name} /></div>
                                <div className="col-lg-2 col-md-2 col-sm-2"><img onClick={()=>setImage(image02)} src={`../../${image02}`} alt={name} /></div>
                                <div className="col-lg-2 col-md-2 col-sm-2"><img onClick={()=>setImage(image03)} src={`../../${image03}`} alt={name} /></div>
                                <div className="col-lg-2 col-md-2 col-sm-2"><img onClick={()=>setImage(image04)} src={`../../${image04}`} alt={name} /></div>
                         
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <h3 className="text-coffee">Category : {categor01.toUpperCase()} , {category02.toUpperCase()}</h3>
                            <h4 className="text-coffee" style={{textTransform:"capitalize"}}>{name}</h4>
                            <div className="star-review-collect">
                                <div className="star-rating">
                                    <span className="star-rating-customer" style={{width: '100%'}}>
                                    {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                                    </span>
                                </div>
                                <a className="review-text">03 customer review</a>
                            </div>
                            <p>{desc}</p>
                            <h3 className="text-coffee">${price}</h3>
                            <div className="price-textbox">
                                {cartProducts.length === 0 ?'' : 
                                    (
                                        cartProducts.map((item)=>{
                                            return(
                                                <>
                                                <span  onClick={decrementCart} className="minus-text"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                    <input type="text" name="txt" placeholder={item.qty} />
                                                <span onClick={incrementCart} className="plus-text"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                                </>
                                            )
                                        })
                                    )
                                }
                               
                            </div>
                            <a onClick={addToCart} className="filter-btn btn-large"><i  className="fa fa-shopping-bag" aria-hidden="true"></i> Add to Cart</a>
                            <div className="share-tag">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="tag-wrap" style={{textTransform:"capitalize"}}>
                                        
                                            {/* <h5>Size : </h5>
                                            <a  onClick={()=>setSize(smallPrice)} className="tag-btn">{small}</a>
                                            <a onClick={()=>setSize(mediumPrice)} className="tag-btn">{medium}</a>
                                            <a onClick={()=>setSize(largePrice)} className="tag-btn">{large}</a> */}
                                        </div>
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

export default Menu;