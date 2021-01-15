import CardProject from "./Cards/CardProject";

export default function Projects(props) {
  function CreateCards() {
    const cards = projects.map((x, i) => {
      return <CardProject key={i} content={x} />;
    });
    return cards;
  }
  const { description, projects } = props.content;

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
