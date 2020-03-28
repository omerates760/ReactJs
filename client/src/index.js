import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import Categories from './Categories';
import Employes from './Employes';
import Adress from './Adress'
import * as serviceWorker from './serviceWorker';
import ProductShopPage from './ProductShopPage';
const routing = (

    <Router>

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-space"><Link to="/ProductShopPage">Alışveriş Yap</Link></li><span>|</span>
                    <li className="nav-space"><Link to="/">Ürün</Link></li>
                    <li className="nav-space"><Link to="/categories">Kategori</Link></li>
                    <li className="nav-space"><Link to="/employes">Müşteri</Link></li>
                    <li className="nav-space"><Link to="/adress">Adres</Link></li>

                </ul>
            </nav>
            <Route exact path="/ProductShopPage" component={ProductShopPage} />
            <Route exact path="/" component={App} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/employes" component={Employes} />
            <Route exact path="/adress" component={Adress} />


        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
