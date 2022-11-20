import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <>
        <Breadcrumb title="Register" />
        <section className="home-icon login-register bg-skeen">
            <div className="icon-default icon-skeen">
                <img src="images/scroll-arrow.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8  col-sm-offset-2 col-sm-8 col-md-offset-2 col-xs-12">
                        <div className="register-wrap form-common">
                            <div className="title text-center">
                                <h3 className="text-coffee">Register</h3>
                            </div>
                            <form className="register-form" method="post" name="register">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" name="txt" placeholder="First Name" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" name="txt" placeholder="Last Name" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" name="txt" placeholder="alitfn58@gmail.com" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="password" name="password" placeholder="Password" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="password" name="password" placeholder="Confirm Password" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="password" name="password" placeholder="Confirm Password" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="submit" name="submit" className="button-default button-default-submit" value="RegIster now"/>
                                    </div>
                                </div>
                            </form>
                            <p>By clicking on “Register Now” button you are accepting the <Link to="#">Terms &amp; Conditions</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
