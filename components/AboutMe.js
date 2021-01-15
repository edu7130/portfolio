import Image from "next/image";
function AboutMe(props) {
  const { description, imgUrl } = props.content;

  

  return (
    <>
    
      <div id="about">
        <div className="container">
          <p className="title">Acerca de mí</p>

          <div className="content">
            <p className="description">{description}</p>
            <img src={imgUrl} className="logo" alt="me"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
