import { ContainerSection, H1 } from "../../golbal-styles"
import { Center } from '../../golbal-styles'
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactContent, ItemSocialMedia, ListSocialNetworks } from "./Contact.elements";

export const Contact = () => {
  
  return (
    <ContainerSection>
      <Center>
        <ContactContent>
          <img src='./assets/svg/social_networking.svg'/>
          <H1>You can contact me through social networks:</H1>

          <ListSocialNetworks>
            
            <ItemSocialMedia>
              <FaLinkedinIn />
            </ItemSocialMedia>
            
            <ItemSocialMedia>
              <FaTwitter />
            </ItemSocialMedia>
            
            <ItemSocialMedia>
              <FaTelegramPlane />
            </ItemSocialMedia>

            <ItemSocialMedia>
              <FaGithub />
            </ItemSocialMedia>
            
            <ItemSocialMedia>
              <MdEmail />
            </ItemSocialMedia>

          </ListSocialNetworks>
        </ContactContent>
      </Center>
    </ContainerSection>
  )
}
