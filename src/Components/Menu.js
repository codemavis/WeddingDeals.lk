import React from 'react'

export default function Menu() {
    return (
        <nav className="main-navbar">
            <div className="container">

                <ul className="main-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Banquet Halls</a></li>
                    <li><a href="#">Decorations</a></li>
                    <li><a href="#">Jewelry <span className="new"> New </span></a></li>
                    <li><a href="#">Clothing</a>
                        <ul className="sub-menu">
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Footwear</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Caterers</a></li>
                    <li><a href="#">Bands & DJ</a></li>
                </ul>
            </div>
        </nav>
    );
}
