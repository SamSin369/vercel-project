import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
const SingleProduct = (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Img variant="top" src={props.imgUrl} className="ProductImage" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Random Text</Card.Text>
        <Button variant="primary">Buy Now: {props.price}$</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
