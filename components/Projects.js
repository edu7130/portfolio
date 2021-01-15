import CardProject from "./Cards/CardProject";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Prueba from "../pages/_prueba";

export default function Projects(props) {
  function CreateCards() {
    const cards = projects.map((x, i) => {
      return <CardProject key={i} content={x} />;
    });
    return cards;
  }
  const { description, projects } = props.content;

  const settings = {
    vertical: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
  };

  return (
    <div id="projects">
      <div className="container">
        <p className="title">Mis Proyectos</p>
        <p className="description">{description}</p>
        <div className="cards">
          {CreateCards()}
        </div>
      </div>
    </div>
  );
}

//export default Projects;
/*
<Carousel
          interval={4000}
            showIndicators={false}
            showThumbs={false}
            swipeable={true}
            width="100%"
            autoPlay={false}
            dynamicHeight={true}
            stopOnHover={true}
            infiniteLoop={true}
            transitionTime={1500}
          >
            {CreateCards()}
          </Carousel>
*/
