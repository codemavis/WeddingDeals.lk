import React from 'react'
import PageInfo from './PageInfo';

const pageName = "Create Account";
const pageLink = "register";

export default function Register() {
    return (
        <div>
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section className="checkout-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2 order-lg-1">
                            <form className="checkout-form">
                                <div className="cf-title">Create Your WeddingDeals.lk Account</div>

                                <div className="row basic-inputs">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Last Name" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" placeholder="Company" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="password" placeholder="Confirm Password" />
                                    </div>
                                </div>

                                <div className="cf-title">Address Info</div>

                                <div className="row address-inputs">
                                 
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Address Line 1" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" placeholder="Address Line 2" />
                                    </div>

                                    <div className="col-md-4">
                                        <input type="text" placeholder="City" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Zip" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Province" />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="text" placeholder="Phone No." />
                                    </div>

                                    <div className="col-md-6">
                                        <input type="text" placeholder="Mobile No." />
                                    </div>
                                </div>
                                
                                <button className="site-btn submit-order-btn">Submit</button>
                            </form>
                        </div>
                        {/* <div className="col-lg-4 order-1 order-lg-2">
                            <div className="checkout-cart">
                                <h3>Your Cart</h3>
                                <ul className="product-list">
                                    <li>
                                        <div className="pl-thumb"><img src="img/cart/1.jpg" alt="" /></div>
                                        <h6>Animal Print Dress</h6>
                                        <p>$45.90</p>
                                    </li>
                                    <li>
                                        <div className="pl-thumb"><img src="img/cart/2.jpg" alt="" /></div>
                                        <h6>Animal Print Dress</h6>
                                        <p>$45.90</p>
                                    </li>
                                </ul>
                                <ul className="price-list">
                                    <li>Total<span>$99.90</span></li>
                                    <li>Shipping<span>free</span></li>
                                    <li className="total">Total<span>$99.90</span></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
