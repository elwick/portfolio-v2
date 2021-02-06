import Head from "next/head";
import { Container, ThemeProvider } from "react-bootstrap";

import { GlobalStyle } from "../styles/GlobalStyles";

import About from "../sections/about";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
import Hero from "../sections/hero";
import Navigation from "../sections/navigation";
import Work from "../sections/work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Mulish:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <Container fluid>
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}
