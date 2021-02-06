import { Container } from "react-bootstrap";
import styled from "styled-components";

export const ViewHeightContainer = styled(Container)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 100vh;
  }
`;
