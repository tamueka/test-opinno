import React, { Component } from 'react';
import * as films from './films.json'
import './App.css';


export default class Films extends Component {
      constructor(props) {
        super(props);
        this.state = {
          films: films.results
        }
      }

  render (){
    console.log(this.state.films)
    return(
        <div className="filmsCard">
          { this.state.films.map((ch, i) =>
            <FilmsCard key={i} title={ch.title} director={ch.director} 
            producer={ch.producer} url={ch.url} episode={ch.episode_id} />
            )}
        </div>
        );
      }
  }

export class FilmsCard extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    return (
      <div className="filmsCard">
        <h1>Start Wars</h1>
        <p>Titulo: {this.props.title}</p>
        <p>Director: {this.props.director}</p>
        <p>Productor: {this.props.producer}</p>
        <p>Url: {this.props.url}</p>
        <p>Episode: {this.props.episode}</p>
      </div>
    );
  }
}

export class App extends Component {
  render (){
    return(
        <div className="StarWars">
          <h1>{this.props.titulo}</h1> 
        </div>
        );
      }
  }

