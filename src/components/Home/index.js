import { ContainerSection } from "../../golbal-styles"
import { HomeContent, MeDescription } from "./Home.elements"

export const Home = () => {
  return (
    <ContainerSection>
      <HomeContent>
        <MeDescription>
        <p>¡Bienvenido! Mi nombre es:</p>
          <h1>
            Eduardo Weidenbacher
          </h1>
          <h3>Desarrollador</h3>
          <h4>Soy un desarrollador apasionado que busca superarse día a día. Me dedico a crear productos cada vez mejores para que los usuarios se sientan más cómodos y disfruten de una experiencia excepcional. Mi objetivo es entender y satisfacer las necesidades de los usuarios, ofreciendo soluciones innovadoras y eficientes.</h4>
        </MeDescription>
        <img src="./assets/svg/web-developer.svg" alt='Programmer'/>
      </HomeContent>
    </ContainerSection>
  )
}
