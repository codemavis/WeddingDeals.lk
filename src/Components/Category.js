import React from 'react'
import PageInfo from './PageInfo';

import prod1 from '../Images/product/1.jpg';
import prod2 from '../Images/product/2.jpg';
import prod3 from '../Images/product/3.jpg';
import prod4 from '../Images/product/4.jpg';
import prod5 from '../Images/product/5.jpg';
import prod6 from '../Images/product/6.jpg';
import prod7 from '../Images/product/7.jpg';
import prod8 from '../Images/product/8.jpg';
import prod9 from '../Images/product/9.jpg';
import prod10 from '../Images/product/10.jpg';
import prod11 from '../Images/product/11.jpg';
import prod12 from '../Images/product/12.jpg';

const pageName = "Category";
const pageLink = "category";

export default function Category() {
    return (
        <div>
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section className="category-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <div className="filter-widget">
                                <h2 className="fw-title">Categories</h2>
                                <ul className="category-menu">
                                    <li><a href="#">Woman wear</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Midi Dresses <span>(2)</span></a></li>
                                            <li><a href="#">Maxi Dresses<span>(56)</span></a></li>
                                            <li><a href="#">Prom Dresses<span>(36)</span></a></li>
                                            <li><a href="#">Little Black Dresses <span>(27)</span></a></li>
                                            <li><a href="#">Mini Dresses<span>(19)</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Man Wear</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Midi Dresses <span>(2)</span></a></li>
                                            <li><a href="#">Maxi Dresses<span>(56)</span></a></li>
                                            <li><a href="#">Prom Dresses<span>(36)</span></a></li>
                                        </ul></li>
                                    <li><a href="#">Children</a></li>
                                    <li><a href="#">Bags & Purses</a></li>
                                    <li><a href="#">Eyewear</a></li>
                                    <li><a href="#">Footwear</a></li>
                                </ul>
                            </div>
                            <div className="filter-widget mb-0">
                                <h2 className="fw-title">refine by</h2>
                                <div className="price-range-wrap">
                                    <h4>Price</h4>
                                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="270">
                                        <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: 0 + '%', width: 100 + '%' }}></div>
                                        <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: 0 + '%' }}>
                                        </span>
                                        <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: 100 + '%' }}>
                                        </span>
                                    </div>
                                    <div className="range-slider">
                                        <div className="price-input">
                                            <input type="text" id="minamount" />
                                            <input type="text" id="maxamount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget mb-0">
                                <h2 className="fw-title">color by</h2>
                                <div className="fw-color-choose">
                                    <div className="cs-item">
                                        <input type="radio" name="cs" id="gray-color" />
                                        <label className="cs-gray" for="gray-color">
                                            <span>(3)</span>
                                        </label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" name="cs" id="orange-color" />
                                        <label className="cs-orange" for="orange-color">
                                            <span>(25)</span>
                                        </label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" name="cs" id="yollow-color" />
                                        <label className="cs-yollow" for="yollow-color">
                                            <span>(112)</span>
                                        </label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" name="cs" id="green-color" />
                                        <label className="cs-green" for="green-color">
                                            <span>(75)</span>
                                        </label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" name="cs" id="purple-color" />
                                        <label className="cs-purple" for="purple-color">
                                            <span>(9)</span>
                                        </label>
                                    </div>
                                    <div className="cs-item">
                                        <input type="radio" name="cs" id="blue-color" checked="" />
                                        <label className="cs-blue" for="blue-color">
                                            <span>(29)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget mb-0">
                                <h2 className="fw-title">Size</h2>
                                <div className="fw-size-choose">
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xs-size" />
                                        <label for="xs-size">XS</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="s-size" />
                                        <label for="s-size">S</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="m-size" checked="" />
                                        <label for="m-size">M</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="l-size" />
                                        <label for="l-size">L</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xl-size" />
                                        <label for="xl-size">XL</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" name="sc" id="xxl-size" />
                                        <label for="xxl-size">XXL</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-widget">
                                <h2 className="fw-title">Brand</h2>
                                <ul className="category-menu">
                                    <li><a href="#">Abercrombie & Fitch <span>(2)</span></a></li>
                                    <li><a href="#">Asos<span>(56)</span></a></li>
                                    <li><a href="#">Bershka<span>(36)</span></a></li>
                                    <li><a href="#">Missguided<span>(27)</span></a></li>
                                    <li><a href="#">Zara<span>(19)</span></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <div className="tag-sale">ON SALE</div>
                                            <img src={prod6} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Black and White Stripes Dress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod7} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod8} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod10} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Black and White Stripes Dress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod11} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod12} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod5} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod9} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod1} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <div className="tag-new">new</div>
                                            <img src={prod2} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Black and White Stripes Dress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod3} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src={prod4} alt="" />
                                            <div className="pi-links">
                                                <a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>$35,00</h6>
                                            <p>Flamboyant Pink Top </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center w-100 pt-3">
                                    <button className="site-btn sb-line sb-dark">LOAD MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
