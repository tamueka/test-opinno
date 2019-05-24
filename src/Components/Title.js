import React, { Component } from 'react';
import '../App.css';


export default class Title extends Component {
  render (){
    return(
        <div className="StarWars">
          <h1>{this.props.titulo}</h1> 
        </div>
        );
      }
}