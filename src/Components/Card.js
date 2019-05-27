import React, { Component } from 'react';
import logo from '../Assets/star-wars.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';




//TARJETA PELICULA
export default class Cards extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <Card>
              <CardImg top src={logo} alt="Logo" />
              <CardBody>
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