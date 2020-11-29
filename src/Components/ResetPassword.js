import React from 'react'
import PageInfo from './PageInfo';
const pageName = "Reset Password";
const pageLink = "reset";

export default function ResetPassword() {
    return (
        <div>
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section className="checkout-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <form className="checkout-form">
                                <div className="cf-title"> Enter your email. We will send you a link to reset your password.</div>
                               
                                <div className="row basic-inputs">
                                    <div className="col-md-12">
                                        <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                    </div>
                                </div>

                                <button className="site-btn submit-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
