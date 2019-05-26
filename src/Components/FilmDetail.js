import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as films from '../Data/films.json';
import Cards from './Card'


export default class FilmDetail extends Component{

  state = {
    film: null,
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    console.log(id)
    films.results.forEach((c) => {
      if (c.episode_id === id) {
        this.setState({ film: c })
      }
    });
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
              url={ch.url} 
              episode={ch.episode_id} 
            />
          </Col>
        </Row>
      </Container>
    );
    }
    
  }