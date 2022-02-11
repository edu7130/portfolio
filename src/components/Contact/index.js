import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Center } from '../../golbal-styles'
import { ContainerSection, H1 } from "../../golbal-styles"
import { ContactContent, ItemSocialMedia, ListSocialNetworks } from "./Contact.elements";


export const Contact = () => {


  return (
    <ContainerSection>
      <Center>
        <ContactContent>
          <img src='./assets/svg/social_networking.svg' />
          <H1>Follow me on my social networks:</H1>
          <nav>
            <ListSocialNetworks>

              <ItemSocialMedia>
                <a href='https://linkedin.com/' target='_blank'>
                  <FaLinkedinIn />
                </a>
              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='https://twitter.com/Eduu_7130' target='_blank'>
                  <FaTwitter />
                </a>
              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='https://t.me/Edu_7130' target='_blank'>
                  <FaTelegramPlane />
                </a>
              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='https://github.com/edu7130' target='_blank'>
                  <FaGithub />
                </a>

              </ItemSocialMedia>

              <ItemSocialMedia>
                <a href='mailto:business_edu@outlook.com' target='_blank'>
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
