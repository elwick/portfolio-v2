import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { styled } from "../../styles/defaultTheme";

const index = () => {
  return (
    <ViewHeightContainer>
      <RowWithMargin>
        <Col>
          <Name>
            Nick <span>Elwick</span>
          </Name>
          <JobTitle>Front End Engineer</JobTitle>
        </Col>
        <Col>
          <Button>Download CV</Button>
        </Col>
      </RowWithMargin>
    </ViewHeightContainer>
  );
};

const ViewHeightContainer = styled(Container)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 100vh;
  }
`;

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

const JobTitle = styled.h4`
  color: #333;
  font-size: 15px;
  line-height: 2.1;
  letter-spacing: 0.8px;
  font-weight: 600;
  display: inline-block;
  padding-top: 10px;
`;

export default index;
