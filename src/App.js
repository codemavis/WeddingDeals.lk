import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Category from './Components/Category';
import Payment from './Components/Payment';

const getCurretUser = async () => {
  if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).accessToken) {

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).accessToken,
      },
    };
    const response = await fetch('http://localhost:5000/entity/user', requestOptions);
    const data = await response.json();

    return { code: 'OK', message: 'Success', user: data.user };
  }
  return { code: 'ERROR', message: 'Token Not Available in Local', user: null };
}

function App() {

  const [currUser, setCurrUser] = useState({ user: null })

  useEffect(async () => {
    let curr = await getCurretUser();
    setCurrUser(curr.user)
  }, [])

  return (
    <Router>
      <div className="App">
        <Header currUser={currUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Product} />
          <Route path="/category/:id" component={Category} />
          <Route path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
