import React from "react";
import breadcrumb_img from "../../images/breadbg1.jpg"

const Breadcrumb = ({title}) =>{
    return(
        <>
            <section class="breadcrumb-part" style={{backgroundImage:`url(${breadcrumb_img})`}}>
                <div class="container">
                    <div class="breadcrumb-inner">
                        <h2>{title}</h2>
                        <a href="#">Home</a>
                        <span>{title}</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb;