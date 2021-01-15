//import ModalDialog from "../ModalDialog";
import { useState } from "react";
import Modal from "react-awesome-modal";
//import "react-awesome-modal";
import Slick from "react-slick";

//import styled, { createGlobalStyle } from "styled-components";
import { Carousel } from "react-responsive-carousel";

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

  function handleimageClick() {
    setVisible(true);
  }

  return (
    <>
      <div id="card-pr">
        <Modal
          visible={isVisible}
          onClickAway={() => setVisible(false)}
          width="80%"
        >
          <embed src={imgUrl} type="image/png" style={{ width: "100%" }} />
        </Modal>
        <span>
          <div onClick={handleimageClick}>
            <img className="img" src={imgUrl} alt={"project " + name} />
            <div className="hover">
              <div>
                <span
                  className="iconify"
                  data-icon="mdi-eye"
                  data-inline="false"
                />
                <p>Ver imagen</p>
              </div>
            </div>
          </div>
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
            <Button url={repository} title="Repositorio"/>
            {download == "" ? null : (
              <Button url={download} title="Descargar" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CardProject;

function Button({ title, url }) {
  return (
    <a href={url} target="_Blank">
      <span className="iconify" data-icon="mdi-link" data-inline="false" />
      <p>{title}</p>
    </a>
  );
}
