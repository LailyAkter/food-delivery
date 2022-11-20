import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function Login() {
  return (
    <>
        <Breadcrumb title="Login" />
        <section className="home-icon login-register bg-skeen">
            <div className="icon-default icon-skeen">
                <img src="images/scroll-arrow.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8  col-sm-offset-2 col-sm-8 col-md-offset-2">
                        <div className="login-wrap form-common">
                            <div className="title text-center">
                                <h3 className="text-coffee">Login</h3>
                            </div>
                            <form className="login-form" method="post" name="login">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="text" name="txt" placeholder="Username or email address" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="password" name="password" placeholder="********" className="input-fields"/>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <label>
                                                    <input type="checkbox" name="chkbox"/>Remember me</label>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <a href="#" className="pull-right">Lost your password</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <input type="submit" name="submit" value="LOGIN" className="button-default button-default-submit"/>
                                    </div>
                                </div>
                            </form>
                            <div className="divider-login">
                                <hr/>
                                <span>Or</span>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <a href="#" className="facebook-btn btn-change button-default"><i className="fa fa-facebook"></i>Facebook Connect</a>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <a href="#" className="tweeter-btn btn-change button-default"><i className="fa fa-twitter"></i>Twitter Connect</a>
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
