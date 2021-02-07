import React from "react";
import { H4JobTitle } from ".";
import { styled } from "../styles/defaultTheme";

interface WorkCard {
  imageSrc: string;
  title: string;
}

const WorkCard = ({ title, imageSrc }: WorkCard) => {
  return (
    <Wrapper>
      <img alt="" src={imageSrc} />
      <H4JobTitle>{title}</H4JobTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default WorkCard;
