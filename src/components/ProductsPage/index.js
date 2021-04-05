import React from "react";
import DummyData from "../../data/index";
import SingleProduct from "../IndividualProducts/SingleProducts";
import { Container, Row, Col } from "react-bootstrap";
const Products = () => {
  console.log(DummyData);
  return (
    <Container>
      <Row>
        {DummyData.arrayOfProducts.map((product) => {
          return (
            <Col xs="12" md="6" xl="4">
              <SingleProduct {...product}></SingleProduct>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
