import React from 'react'
import PageInfo from './PageInfo';
import { Link } from 'react-router-dom';

const pageName = "Sign In";
const pageLink = "login";

export default function Login() {
    return (
        <div>
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section className="checkout-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <form className="checkout-form">
                                <div className="cf-title">Sign In To Your WeddingDeals.lk Account</div>
                                <div className="row basic-inputs">
                                    <div className="col-md-12">
                                        <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <Link to="/reset"> <ul style={{ float: 'right' }}>Forgot Password</ul> </Link>
                                </div>
                                <button className="site-btn submit-btn">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
