import About from "../sections/About";
import Cta from "../sections/Cta";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Reviews from "../sections/Reviews";
import Services from "../sections/Services";

import Container from "./Container";
import Reveal from "./Reveal";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-plus text-slate-950">
      <Header />

      <main>
        <Hero />

        <Container>
          <div className="flex flex-col gap-16 py-12 sm:gap-20 lg:gap-32 lg:py-16">
            <Reveal>
              <Services />
            </Reveal>

            <Reveal>
              <About />
            </Reveal>

            <Reveal>
              <Reviews />
            </Reveal>

            <Reveal>
              <Cta />
            </Reveal>
          </div>
        </Container>
      </main>

      <Container>
        <Reveal>
          <Footer />
        </Reveal>
      </Container>
    </div>
  );
};

export default Layout;
