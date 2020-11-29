import React from 'react'
import logoLight from '../Images/logo-main.png';
import cards from '../Images/cards.png';
import blogThumbs1 from '../Images/blog-thumbs/1.jpg';
import blogThumbs2 from '../Images/blog-thumbs/2.jpg';

export default function Footer() {
    
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h2>About</h2>
                            <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
                            <img src={cards} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h2>Questions</h2>
                            <ul>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Track Orders</a></li>
                                <li><a href="">Returns</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Shipping</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                            <ul>
                                <li><a href="">Partners</a></li>
                                <li><a href="">Bloggers</a></li>
                                <li><a href="">Support</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Press</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h2>Questions</h2>
                            <div className="fw-latest-post-widget">
                                <div className="lp-item">
                                    <div className="lp-thumb set-bg" data-setbg={blogThumbs1}></div>
                                    <div className="lp-content">
                                        <h6>what shoes to wear</h6>
                                        <span>Oct 21, 2018</span>
                                        <a href="#" className="readmore">Read More</a>
                                    </div>
                                </div>
                                <div className="lp-item">
                                    <div className="lp-thumb set-bg" data-setbg={blogThumbs2}></div>
                                    <div className="lp-content">
                                        <h6>trends this year</h6>
                                        <span>Oct 21, 2018</span>
                                        <a href="#" className="readmore">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget contact-widget">
                            <h2>Questions</h2>
                            <div className="con-info">
                                <span>C.</span>
                                <p>Your Company Ltd </p>
                            </div>
                            <div className="con-info">
                                <span>B.</span>
                                <p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
                            </div>
                            <div className="con-info">
                                <span>T.</span>
                                <p>+53 345 7953 32453</p>
                            </div>
                            <div className="con-info">
                                <span>E.</span>
                                <p>office@youremail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-links-warp">
                <div className="container">
                    <div className="social-links">
                        <a href="" className="instagram"><i className="fa fa-instagram"></i><span>instagram</span></a>
                        <a href="" className="google-plus"><i className="fa fa-google-plus"></i><span>g+plus</span></a>
                        <a href="" className="pinterest"><i className="fa fa-pinterest"></i><span>pinterest</span></a>
                        <a href="" className="facebook"><i className="fa fa-facebook"></i><span>facebook</span></a>
                        <a href="" className="twitter"><i className="fa fa-twitter"></i><span>twitter</span></a>
                        <a href="" className="youtube"><i className="fa fa-youtube"></i><span>youtube</span></a>
                        <a href="" className="tumblr"><i className="fa fa-tumblr-square"></i><span>tumblr</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
