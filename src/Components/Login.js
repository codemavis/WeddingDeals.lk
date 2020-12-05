import React, { useState } from 'react';
import PageInfo from './PageInfo';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {

    const history = useHistory();

    const pageName = "Sign In";
    const pageLink = "login";

    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const newUser = { ...user };

        switch (e.target.name) {
            case 'email':
                newUser.email = e.target.value.toLowerCase();
                break;
            case 'password':
                newUser.password = e.target.value;
                break;
            default:
                break;
        }
        setUser(newUser);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (await login()) {
            history.push('/');
            history.go(0);
        }
    }

    const login = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };

            const response = await fetch('http://localhost:4444/login/', requestOptions);
            const data = await response.json();
            console.log('data', data);

            if (data.code === 'OK') {
                localStorage.setItem('token', JSON.stringify({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
                return true;
            }

            alert(data.message);
        } catch (error) {
            console.log('error', error);
        }

        return false;
    }

    return (
        <div >
            <PageInfo pageName={pageName} pageLink={pageLink} />
            <section className="checkout-section spad" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-lg-12 order-2 order-lg-1" >
                            <form className="checkout-form" onSubmit={onSubmit} >
                                <div className="cf-title" > Sign In To Your WeddingDeals.lk Account </div>
                                <div className="row basic-inputs" >
                                    <div className="col-md-12" >
                                        <input type="email" placeholder="Email" required name="email" id="email" pattern="[ A-Za-z0-9._%+-]+@[ A-Za-z0-9.-]+\.[ A-Za-z]{2,4}$" onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12" >
                                        <input type="password" placeholder="Password" required name="password" id="password" onChange={handleChange} />
                                    </div> </div> <div className="col-md-12" >
                                    <Link to="/reset"> <ul style={{ float: 'right' }}> Forgot Password </ul> </Link >
                                </div>
                                <button type="submit" className="site-btn submit-btn" > Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}