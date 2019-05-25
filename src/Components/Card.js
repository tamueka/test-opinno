import React, { Component } from 'react';
import logo from '../Assets/star-wars.jpg'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'



//TARJETA PELICULA
export default class Cards extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <Card>
              <CardImg top src={logo} alt="Logo" />
              <Link to = {"/film/" + this.props.episode} >
              <CardBody>
                <CardTitle>Titulo: {this.props.title}</CardTitle>
                <CardSubtitle>Director: {this.props.director}</CardSubtitle>
                <CardText>Productor: {this.props.producer}</CardText>
                <CardText>Episodio: {this.props.episode}</CardText>
              </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}