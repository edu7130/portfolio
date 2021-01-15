import ItemSocialMedia from "./Cards/ItemSocialMedia";
import Link from "next/link";

function Contact(props) {
  const { description, mail, socialMedia, curriculum } = props.content;

  function listSocialMedia() {
    const media = socialMedia.map((x, i) => {
      return <ItemSocialMedia key={i} content={x} />;
    });
    return media;
  }

  return (
    <div id="contact">
      <div className="container">
        <p className="title">Contáctame</p>
        <div className="grid-container">
          <a className="mail" href={"mailto:" + mail}>
            <span
              className="iconify"
              data-icon="mdi-email"
              data-inline="false"
            ></span>
            <p>{mail}</p>
          </a>
          <Link href="/resume">
            <a className="curriculum">
              <span
                className="iconify"
                data-icon="mdi-note"
                data-inline="false"
              ></span>
              <p>Mi Curriculum</p>
            </a>
          </Link>
        </div>
        <p className="description">{description}</p>
        <ul className="list">{listSocialMedia()}</ul>
      </div>
    </div>
  );
}

export default Contact;
