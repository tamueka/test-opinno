import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cards from './Card'

export default class FilmDetail extends Component{

  state = {
    film: null,
  }

  componentDidMount(){
    let id = this.props.match.params.episode_id;

    fetch("https://swapi.co/api/films/" + id)
      .then(r => r.json())
      .then(d => this.setState({film: d}))
  }
  

  render() {
    if (!this.state.film) {
      return <div></div>
    }
    
    let ch = this.state.film;

    return (
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <Cards
              title={ch.title} 
              director={ch.director} 
              producer={ch.producer} 
              episode={ch.episode_id} 
            />
          </Col>
        </Row>
      </Container>
    );
  }
    
}