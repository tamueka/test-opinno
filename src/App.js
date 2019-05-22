import React, { Component } from 'react';
import * as films from './films.json'
import './App.css';

function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

export default class Films extends Component {
      constructor(props) {
        super(props);
        this.state = {
          films: films.results,
          term: ''
        }
        this.searchHandler = this.searchHandler.bind(this)
      }

      searchHandler(event){
        this.setState({term: event.target.value})
      }

  render (){
    const {term, films} = this.state;
    return(
        <div className="filmsCard">
          <input type="text" 
                  onChange={this.searchHandler}
                  value={term}
                  placeholder="Search..."
          />

          { films.filter(searchingFor(term)).map((ch, i) =>
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

