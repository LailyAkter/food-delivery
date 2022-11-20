import React from "react";

const Footer = () =>{
    return (
        <>
            <footer>
                <div class="footer-part wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div class="icon-default icon-dark">
                        <img src="images/footer-logo.png" alt=""/>
                    </div>
                    <div class="container">
                        <div class="footer-inner">
                            <div class="footer-info">
                                <h3>Rigor Restaurant</h3>
                                <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                                <p><a href="#">123 456 7890</a></p>
                                <p><a href="#">support@Rigor.com</a></p>
                            </div>
                        </div>
                        <div class="copy-right">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12 copyright-before">
                                    <span><p>Designed by <a href="http://InfoBanglaltd.com" target="_blank">InfoBangla Ltd.</a>  All Rights Reserved.</p></span>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 copyright-after">
                                    <div class="social-round">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="icon-find">
                        <a href="#">
                            <img src="images/location.png" alt=""/>
                            <span>Find us on Map</span>
                        </a>
                    </div>
                    <div class="location-footer-map">
                        <div class="icon-find-location">
                            <a href="#">
                                <img src="images/location.png" alt=""/>
                                <span>Find us on Map</span>
                            </a>
                        </div>
                        <div class="footer-map-outer">
                            <div id="footer-map"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;