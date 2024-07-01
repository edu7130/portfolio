import { Link } from 'react-router-dom'

import { MdAccountCircle, MdBuild } from 'react-icons/md'
// import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa'
import {  SiNestjs, SiGraphql, SiMercadopago, SiTypescript } from 'react-icons/si'
// import { GrDocumentPdf } from 'react-icons/gr'


import { ContainerSection, LinkContainer } from '../../golbal-styles'
import { Article, Content, List, ListItem } from './About.elements'
import { SkillCard } from '../Skill'
import { FaJava, FaReact } from 'react-icons/fa'

export const About = () => {


  return (
    <ContainerSection scroll>
      <Content>
        <Article bgColor='#9090904F'>
          <h2>
            <MdBuild />
            Habilidades
          </h2>
          <hr />
          <p>
            Estas son algunas de las tecnologías con las que trabajo y trabajé en algun momento.
          </p>
          <List>

            <ListItem>
              <SkillCard name='NestJs'>
                <SiNestjs color='#EA2858'/>
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='GraphQL'>
                <SiGraphql  color='#F6009C'/>
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='Mercadopago'>
                <SiMercadopago color='#00BCFF'/>
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='Typescrypt'>
                <SiTypescript color='#3178C6'/>
              </SkillCard>
            </ListItem>

            <ListItem>
              <SkillCard name='ReactJs'>
                <FaReact color='#58C4DC'/>
              </SkillCard>
            </ListItem>
            <ListItem>
              <SkillCard name='Java'>
                <FaJava color='#7ABAFAD7'/>
              </SkillCard>
            </ListItem>
            {/* 

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
            */}
          </List>
        </Article>

        <Article bgColor='#9090904F'>
          <h2>
            <MdAccountCircle />
            Acerca de mi
          </h2>
          <hr />
          <p>
            Soy un desarrollador apasionado que busca superarse día a día. Me dedico a crear productos cada vez mejores para que los usuarios se sientan más cómodos y disfruten de una experiencia excepcional. Mi objetivo es entender y satisfacer las necesidades de los usuarios, ofreciendo soluciones innovadoras y eficientes.
          </p>
          {/* <LinkContainer style={{display:'none'}}>
            <Link to='/resume' cg='2rem'>
              <GrDocumentPdf />
              My Resume
            </Link>
          </LinkContainer> */}
          <img src='./assets/svg/web-developer.svg' alt='Programmer' />
        </Article>
      </Content>
    </ContainerSection>
  )
}
