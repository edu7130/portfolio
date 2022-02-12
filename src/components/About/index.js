import { Link } from 'react-router-dom'

import { MdAccountCircle, MdBuild } from 'react-icons/md'
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa'
import { SiExpress, SiFlutter, SiCss3, SiStyledcomponents } from 'react-icons/si'
import { GrDocumentPdf } from 'react-icons/gr'

import { ContainerSection, LinkContainer } from '../../golbal-styles'
import { Article, Content, List, ListItem } from './About.elements'
import { SkillCard } from '../Skill'

export const About = () => {


  return (
    <ContainerSection scroll>
      <Content>
        <Article bgColor='rgba(255,255,255,.05)' bgImg='./assets/jpg/grey.jpg'>
          <h2>
            <MdBuild />
            Skills
          </h2>
          <hr />
          <p>
            Here I show you the technologies and tools with which I usually work. Of course, I always keep abreast of the latest technologies.
          </p>
          <List>
            <ListItem>
              <SkillCard name='React'>
                <FaReact />
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='Styled components'>
                <SiStyledcomponents />
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='HTML'>
                <FaHtml5 />
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='CSS'>
                <SiCss3 />
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='NodeJs'>
                <FaNodeJs />
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='Express'>
                <SiExpress />
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='Flutter'>
                <SiFlutter />
              </SkillCard>
            </ListItem>
          </List>
        </Article>

        <Article bgColor='rgba(255,255,255,.05)' bgImg='./assets/jpg/grey.jpg'>
          <h2>
            <MdAccountCircle />
            About me
          </h2>
          <hr />
          <p>
            I am a junior developer living in Argentina. I have loved technology since I was a child, I was always curious to know how computers work.
          </p>
          <p>
            I consider myself an organized person who likes to solve problems and pays great attention to details.
          </p>
          <LinkContainer>
            <Link to='/resume' cg='2rem'>
              <GrDocumentPdf />
              My Resume
            </Link>
          </LinkContainer>
          <img src='./assets/svg/web-developer.svg' alt='Programmer' />
        </Article>
      </Content>
    </ContainerSection>
  )
}
