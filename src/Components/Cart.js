import React from 'react'
import PageInfo from './PageInfo';

import cart1 from '../Images/cart/1.jpg'
import cart2 from '../Images/cart/2.jpg'
import cart3 from '../Images/cart/3.jpg'

const pageName = "Shopping Cart";
const pageLink = "cart";

export default function Cart() {
    return (
        <div>
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section class="cart-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="cart-table">
                                <h3>Your Cart</h3>
                                <div class="cart-table-warp">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="product-th">Product</th>
                                                {/* <th class="quy-th">Quantity</th>
									<th class="size-th">SizeSize</th> */}
                                                <th class="total-th">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="product-col">
                                                    <img src={cart1} alt="" />
                                                    <div class="pc-title">
                                                        <h4>Animal Print Dress</h4>
                                                        <p>$45.90</p>
                                                    </div>
                                                </td>
                                                {/* <td class="quy-col">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="size-col"><h4>Size M</h4></td> */}
                                                <td class="total-col"><h4>$45.90</h4></td>
                                            </tr>
                                            <tr>
                                                <td class="product-col">
                                                    <img src={cart2} alt="" />
                                                    <div class="pc-title">
                                                        <h4>Ruffle Pink Top</h4>
                                                        <p>$45.90</p>
                                                    </div>
                                                </td>
                                                {/* <td class="quy-col">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="size-col"><h4>Size M</h4></td> */}
                                                <td class="total-col"><h4>$45.90</h4></td>
                                            </tr>
                                            <tr>
                                                <td class="product-col">
                                                    <img src={cart3} alt="" />
                                                    <div class="pc-title">
                                                        <h4>Skinny Jeans</h4>
                                                        <p>$45.90</p>
                                                    </div>
                                                </td>
                                                {/* <td class="quy-col">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="size-col"><h4>Size M</h4></td> */}
                                                <td class="total-col"><h4>$45.90</h4></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="total-cost">
                                    <h6>Total <span>$99.90</span></h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 card-right">
                            {/* <form class="promo-code-form">
                                <input type="text" placeholder="Enter promo code" />
                                <button>Submit</button>
                            </form> */}
                            <a href="" class="site-btn">Proceed to checkout</a>
                            <a href="" class="site-btn sb-dark">Continue shopping</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
