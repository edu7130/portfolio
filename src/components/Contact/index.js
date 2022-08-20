import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Center } from '../../golbal-styles'
import { ContainerSection, H1 } from "../../golbal-styles"
import { ContactContent, ItemSocialMedia, ListSocialNetworks } from "./Contact.elements";


export const Contact = () => {


  return (
    <ContainerSection>
      <Center>
        <ContactContent>
          <img src='./assets/svg/social_networking.svg' alt='Networking'/>
          <H1>Follow me on my social networks:</H1>
          <nav>
            <ListSocialNetworks>

              <ItemSocialMedia>
                <a href='https://www.linkedin.com/in/eduardo-nicolas-weidenbacher-0031281ab/' target='_blank' rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='https://twitter.com/Eduu_7130' target='_blank' rel="noreferrer">
                  <FaTwitter />
                </a>
              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='https://github.com/edu7130' target='_blank' rel="noreferrer">
                  <FaGithub />
                </a>

              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='mailto:contact@edu-dev.ar' target='_blank' rel="noreferrer">
                  <MdEmail />
                </a>
              </ItemSocialMedia>

            </ListSocialNetworks>
          </nav>
        </ContactContent>
      </Center>
    </ContainerSection>
  )
}
