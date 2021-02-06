import { styled } from "../styles/defaultTheme";

export const TextInBG = styled.span`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 90px;
  }

  position: absolute;
  left: 20px;
  top: 39px;
  color: transparent;
  font-size: 150px;
  font-weight: 700;
  opacity: 0.1;
  line-height: 0;
  -webkit-text-stroke: 1px #000;
  text-transform: uppercase;
`;
