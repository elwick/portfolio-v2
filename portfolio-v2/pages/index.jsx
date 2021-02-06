import Head from "next/head";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
