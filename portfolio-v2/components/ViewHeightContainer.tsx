import { Container as BootstrapContainer } from "react-bootstrap";
import { styled } from "../styles/defaultTheme";

export const Container = styled(BootstrapContainer)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1400px;
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 100vh;
  }
`;
