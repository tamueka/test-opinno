import React, { Component } from 'react';
import './App.css';

export class FilmCard extends Component {
  render (){
    return(
        <div className="filmCard">
          <App />
          <h2>Nombre pelicula</h2>
          <p>Director</p>
          <p>Episodio</p>
          <p>Productor</p>
        </div>
        );
      }
  }

export class App extends Component {
  render (){
    return(
        <div className="StarWars">
          <h1>STAR WARS</h1> 
        </div>
        );
      }
  }

export default FilmCard;
