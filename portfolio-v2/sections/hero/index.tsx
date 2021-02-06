import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Container, H4JobTitle } from "../../components";
import { styled } from "../../styles/defaultTheme";

const index = () => (
  <Container>
    <RowWithMargin>
      <Col sm={12} lg={6}>
        <Name>
          Nick <span>Elwick</span>
        </Name>
        <H4JobTitle>Front End Engineer</H4JobTitle>
      </Col>
      <Col sm={12} lg={6}>
        <Button>Download CV</Button>
      </Col>
    </RowWithMargin>
  </Container>
);

const RowWithMargin = styled(Row)`
  margin-top: 20%;
`;

const Name = styled.h1`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 90px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 50px;
  }

  -webkit-text-stroke: 1px #000;
  color: transparent;
  font-size: 120px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 1.1;

  span {
    color: #000;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    line-height: 1.1;
    display: block;
    -webkit-text-stroke: transparent;
  }
`;

export default index;
