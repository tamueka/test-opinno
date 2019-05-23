import React, { Component } from 'react';
import logo from './Assets/star-wars.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import Title from './Title'



//TARJETA PELICULA
export default class Cards extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    return (

      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <Card>
              <CardImg top height="350px" width="100%" src={logo} alt="Logo" />
              <CardBody>
                <Title>Titulo: {this.props.titulo}</Title>
                <CardTitle>Titulo: {this.props.title}</CardTitle>
                <CardSubtitle>Director: {this.props.director}</CardSubtitle>
                <CardText>Productor: {this.props.producer}</CardText>
                <CardText>Episodio: {this.props.episode}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}