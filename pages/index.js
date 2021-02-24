import Head from "next/head";

import data from "./api/portfolio.json";

import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
//<link rel="icon" href="../favicon.png" type="image/png" />
export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        <title>Eduardo Weidenbacher | Programador</title>
        <meta name="lang" content="es" />
        <meta
          name="description"
          content="Eduardo Nicolas Weidenbacher Programador"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../icon/favicon.ico"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Peta&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Grandstander:wght@300&family=Kanit:wght@300&family=Lexend+Peta&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Presentation content={data.home} />
      <AboutMe content={data.about} />
      <Skills content={data.skills} />
      <Projects content={data.projects} />
      <Contact content={data.contact} />
      <Footer content={data.copyright} />
    </div>
  );
}
