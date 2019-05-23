import React, { Component } from 'react';
import * as films from './films.json'
import './App.css';
import logo from './assets/star-wars.jpg'

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

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

    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Titulo: {this.props.title}</CardTitle>
          <CardSubtitle>Director: {this.props.director}</CardSubtitle>
          <CardText>Productor: {this.props.producer}</CardText>
          <CardText>Episodio: {this.props.episode}</CardText>
        </CardBody>
      </Card>
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

