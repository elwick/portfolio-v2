import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container, H3Title, TextInBG } from "../../components";
import WorkCard from "../../components/WorkCard";

const index = () => (
  <Container>
    <Row>
      <Col>
        <H3Title>My weeeeeerk</H3Title>
        <TextInBG>Portfolio</TextInBG>
      </Col>
    </Row>
    <Row>
      <Col className="mb-5" md={6} lg={4}>
        <WorkCard imageSrc="https://picsum.photos/518/480" title="Test Title" />
      </Col>
      <Col md={6} lg={4}>
        <WorkCard imageSrc="https://picsum.photos/518/480" title="Test Title" />
      </Col>
      <Col md={6} lg={4}>
        <WorkCard imageSrc="https://picsum.photos/518/480" title="Test Title" />
      </Col>
      <Col md={6} lg={4}>
        <WorkCard imageSrc="https://picsum.photos/518/480" title="Test Title" />
      </Col>
    </Row>
  </Container>
);

export default index;
