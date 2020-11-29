import React from 'react'
import Menu from './Menu'
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 text-center text-lg-left">

                            <a href="/" className="site-logo">
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <form className="header-search-form">
                                <input type="text" placeholder="Search on WeddingDeals.lk ...." />
                                <button><i className="flaticon-search"></i></button>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="user-panel">
                                <div className="up-item">
                                    <i className="flaticon-profile"></i>

                                    <Link to="/login"><a> <strong>Sign In</strong> </a></Link> or <Link to="/register"><a> <strong>Create Account</strong> </a></Link>
                                </div>
                                <div className="up-item">
                                    <div className="shopping-card">
                                        <i className="flaticon-bag"></i>
                                        <span>0</span>
                                    </div>
                                    <a href="#"> Shopping Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </header>


    )
}

export default Header;