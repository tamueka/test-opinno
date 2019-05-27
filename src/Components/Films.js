import React, { Component } from 'react';
import { Input, Container, Row, Col } from 'reactstrap';
import Cards from './Card'
import { Link } from 'react-router-dom'

//FUNCION FILTRADO PELICULAS
function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      term: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event){
    this.setState({term: event.target.value})
  }

  componentDidMount(){
    fetch("https://swapi.co/api/films/")
    .then(r => r.json())
    .then(d => {
        this.setState({films: d.results})
    })
    }



  render (){
    const {term, films} = this.state;
    return(
        <Container>
            <Row>
              <Col xs={6} md={6} xl={6}>
                <Input  type="text" 
                        onChange={this.searchHandler}
                        value={term}
                        placeholder="Search..."
                />
              </Col>
              <Col xs={9} md={9} xl={9}> 
                 { films.filter(searchingFor(term)).map((ch, i) =>
                <Link to = {"/films/" + ch.episode_id} >
                  <Cards key={i} 
                        title={ch.title} 
                        director={ch.director} 
                        producer={ch.producer} 
                        episode={ch.episode_id} 
                  />
                </Link>
                  )}
              </Col>
            </Row>
        </Container>
        );
      }
  }