import React from 'react'
import Menu from './Menu'
import logo from '../Images/logo.png';
import { Link, useHistory } from 'react-router-dom';

export default function Header(props) {

    const history = useHistory();

    const loggout = async () => {

        if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).refreshToken) {

            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "token": JSON.parse(localStorage.getItem('token')).refreshToken })
            };
            try {
                const response = await fetch('http://localhost:4444/logout', requestOptions);
                const data = await response.json();
                console.log('data', data);
            } catch (error) {
                console.log('error', error.message);
            }
        }

        localStorage.clear();
        history.push('/');
        history.go(0);
    }

    let loggedIn;
    if (props.currUser) {
        loggedIn = (
            <><Link to="/"> Welcome <strong>{props.currUser.firstname}</strong> </Link> | < Link to="/" onClick={loggout}> Logout</Link ></>
        )
    } else {
        loggedIn = (
            <><Link to="/login"> <strong>Sign In</strong> </Link> or  <Link to="/register"> <strong>Create Account</strong></Link ></>
        )
    }

    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 text-center text-lg-left">

                            <a href="/" className="site-logo">
                                <img src={logo} alt="" />
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
                                    {loggedIn}
                                </div>
                                <div className="up-item">
                                    <div className="shopping-card">
                                        <i className="flaticon-bag"></i>
                                        <span>0</span>
                                    </div>
                                    <Link to="/cart">Shopping Cart</Link>
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
