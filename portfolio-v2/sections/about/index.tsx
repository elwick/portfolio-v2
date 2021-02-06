import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  Container,
  H3Title,
  H4JobTitle,
  Text,
  TextInBG,
} from "../../components";
import { styled } from "../../styles/defaultTheme";

const index = () => {
  return (
    <Container>
      <Row style={{ paddingTop: "2em" }}>
        <Col sm={12} lg={5}>
          <Image src="https://picsum.photos/518/480" alt="" />
        </Col>

        <Col sm={12} lg={7}>
          <H3Title>Nick Elwick</H3Title>
          <TextInBG>About</TextInBG>
          <H4JobTitle>Front End Developer</H4JobTitle>

          <TextWrapper>
            <Text>
              My name is Bernard Sydney. I am a Web Developer, and I'm very
              passionate and dedicated to my work.
            </Text>
            <Text>
              With 20 years experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I enjoy every step of the design process, from discussion
              and collaboration.
            </Text>
            <Button>Download MY CV</Button>
          </TextWrapper>
        </Col>
      </Row>

      <CardRow>
        <Col sm={12} md={4}>
          <CardTitle>Card Title</CardTitle>
          <Text>
            Web design is a similar process of creation, with the intention of
            presenting...
          </Text>
        </Col>

        <Col sm={12} md={4}>
          <CardTitle>Card Title</CardTitle>
          <Text>
            Web design is a similar process of creation, with the intention of
            presenting...
          </Text>
        </Col>

        <Col sm={12} md={4}>
          <CardTitle>Card Title</CardTitle>
          <Text>
            Web design is a similar process of creation, with the intention of
            presenting...
          </Text>
        </Col>
      </CardRow>
    </Container>
  );
};

const CardRow = styled(Row)`
  margin-top: 5em;
`;

const Image = styled.img`
  width: 100%;
`;

const CardTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

const TextWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 3em;
  padding-top: 2em;
`;

export default index;
