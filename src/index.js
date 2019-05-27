import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Films from './Components/Films';
import FilmDetail from './Components/FilmDetail';
import Carrusel from './Components/Carrusel'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404  from './Components/Error404';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  //podemos utilizar HashRouter

import { Header }  from './Components/Header';
import { Footer }  from './Components/Footer'


ReactDOM.render( 
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/index" component={ Films } />
                <Route path="/films/:episode_id" component={ FilmDetail } />
                <Route path="/carrusel" component={Carrusel} />
                <Route component={Error404} />
            </Switch>
            <Footer />
        </div>
    </Router>

,   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
