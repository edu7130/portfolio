//import ModalDialog from "../ModalDialog";
import { useState } from "react";
import Modal from "react-awesome-modal";
import Slick from "react-slick";

//import styled, { createGlobalStyle } from "styled-components";

function CardProject(props) {
  const [isVisible, setVisible] = useState(false);
  const {
    name,
    description,
    imgUrl,
    download,
    repository,
    tags,
  } = props.content;

  function listTags() {
    const tag = tags.map((x, i) => {
      return (
        <li key={i}>
          <code translate="no">{x}</code>
        </li>
      );
    });
    return tag;
  }

  return (
    <>
      <div id="card-pr">
        <span>
          <img className="img" src={imgUrl} alt={"project " + name} />
        </span>

        <div className="content">
          <p className="title">
            <code lang="en" translate="no">
              {name}
            </code>
          </p>
          <p className="description">{description}</p>

          <div className="tags-container">
            <p>Tags:</p>
            <ul className="tags-ul">{listTags()}</ul>
          </div>
          <div className="links-container">
            <a href={repository} target="_Blank">
              <span
                className="iconify"
                data-icon="mdi-link"
                data-inline="false"
              />
              <p>Repositorio</p>
            </a>
            <button onClick={() => setVisible(true)}>Ver</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardProject;
