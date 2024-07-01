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
          <h4>Soy un desarrollador backend apasionado con experiencia en múltiples tecnologías y siempre en busca de aprender más.</h4>
        </MeDescription>
        <img src="./assets/svg/web-developer.svg" alt='Programmer'/>
      </HomeContent>
    </ContainerSection>
  )
}
