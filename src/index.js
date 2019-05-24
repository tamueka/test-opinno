import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Films from './Components/Films';
import FilmDetail from './Components/FilmDetail';
import Carrusel from './Components/Carrusel'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render( 
    <Router>
        <Route path="/index" component={ Films } />
        <Route path="/film/:id(\d)" component={ FilmDetail } />
        <Route path="/carrusel" component={Carrusel} />
    </Router>

,   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
