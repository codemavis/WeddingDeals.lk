import React from 'react'
import { Link } from 'react-router-dom';

export default function PageInfo(props) {
    return (
        <div>
            <div className="page-top-info">
                <div className="container">
                    <h4>{props.pageName}</h4>
                    <div className="site-pagination">
                        <Link to="">Home</Link> / <Link to={props.pageLink}>{props.pageName}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
