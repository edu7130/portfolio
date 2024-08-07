import { useState } from "react"
import { Content, Info, LinkProject, RowLinks } from "./CardProject.elements"
import { MdDownload, MdLink } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

export const CardProject = ({ name, description, url, urlRepo, priv, platform, img }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleHidde = () => setShow(false);
    const handleToggle = () => setShow(!show);

    return (
        <Content urlImage={img} onClick={handleToggle} onMouseLeave={handleHidde} onMouseEnter={handleShow}>
            <Info show={show}>
                <h3>{name}</h3>
                <p>{description}</p>
                <RowLinks priv={priv}>
                    <LinkProject href={urlRepo} target='_blank' >
                        <MdLink />
                        <p>Repositorio</p>
                    </LinkProject>
                    <LinkProject href={url} target='_blank'>
                        {platform === 'WEB' ?
                            <>
                                <GiWorld />
                                <p>Visitar</p>
                            </> :
                            <>
                                <MdDownload />
                                <p>Descargar</p>
                            </>
                        }
                    </LinkProject>
                </RowLinks>
            </Info>
        </Content>
    )
}
