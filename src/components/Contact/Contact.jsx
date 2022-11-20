import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function Contact() {
  return (
        <>
            <Breadcrumb title="Contact"/>
            <section className="default-section contact-part home-icon">
                <div className="icon-default">
                    <a href="#"><img src="images/scroll-arrow.png" alt=""/></a>
                </div>
                <div className="container">
                    <div className="title text-center">
                        <h2 className="text-coffee">Contact Us</h2>
                        <h6 className="heade-xs">We are a second-generation family business established in 1972</h6>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <div className="contact-blog-row">
                                <div className="contact-icon">
                                    <img src="images/location-icon.png" alt=""/>
                                </div>
                                <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <div className="contact-blog-row">
                                <div className="contact-icon">
                                    <img src="images/cell-icon.png" alt=""/>
                                </div>
                                <p><a href="tel:1234567890">123 456 7890</a></p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <div className="contact-blog-row">
                                <div className="contact-icon">
                                    <img src="images/mail-icon.png" alt=""/>
                                </div>
                                <p><a href="mailto:support@despina.com">support@despina.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <h5 className="text-coffee">Leave us a Message</h5>
                            <p>Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis.</p>
                            <form className="form" method="post" name="contact-form">
                                <div className="row">
                                    <div className="alert-container"></div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <label>First Name *</label>
                                        <input name="first_name" type="text" required/>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <label>Last Name *</label>
                                        <input name="last_name" type="text" required/>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <label>Email *</label>
                                        <input name="email" type="email" required/>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <label>Subject *</label>
                                        <input name="subject" type="text" required/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <label>Your Message *</label>
                                        <textarea name="message" required></textarea>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input name="submit" value="SEND MESSAGE" className="btn-black pull-right send_message" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <h5 className="text-coffee">Opening Hours</h5>
                            <ul className="time-list">
                                <li><span className="week-name">Monday</span> <span>12-6 PM</span></li>
                                <li><span className="week-name">Tuesday</span> <span>12-6 PM</span></li>
                                <li><span className="week-name">Wednesday</span> <span>12-6 PM</span></li>
                                <li><span className="week-name">Thursday</span> <span>12-6 PM</span></li>
                                <li><span className="week-name">Friday</span> <span>12-6 PM</span></li>
                                <li><span className="week-name">Saturday</span> <span>12-6 PM</span></li>
                                <li><span className="week-name">Sunday</span> <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}
