import React, { Component } from 'react';
import * as films from './Data/films.json';
import { Input, Container, Row, Col, Card } from 'reactstrap';
import Cards from './Card'


//FUNCION FILTRADO PELICULAS
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
        <Container>
            <Row>
                 <Col xs={9} md={9} xl={9}>
                    <Card>
                        <Input  type="text" 
                        onChange={this.searchHandler}
                        value={term}
                        placeholder="Search..."
                        />

                    { films.filter(searchingFor(term)).map((ch, i) =>
                     <Cards key={i} title={ch.title} director={ch.director} 
                    producer={ch.producer} url={ch.url} episode={ch.episode_id} />
                    )}
                    </Card>
                </Col>
            </Row>
        </Container>
        );
      }
  }