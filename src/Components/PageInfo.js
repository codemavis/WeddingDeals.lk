import React from 'react'
import { Link } from 'react-router-dom';

export default function PageInfo(props) {
    return (
        <div>
            <div class="page-top-info">
                <div class="container">
                    <h4>{props.pageName}</h4>
                    <div class="site-pagination">
                        <Link to=""><a>Home</a></Link> / <Link to={props.pageLink}><a>{props.pageName}</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
