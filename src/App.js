import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResetPassword from './Components/ResetPassword';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Category from './Components/Category';
import Payment from './Components/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
