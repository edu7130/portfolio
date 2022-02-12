import { ContainerSection } from "../../golbal-styles"
import { HomeContent, MeDescription } from "./Home.elements"

export const Home = () => {
  return (
    <ContainerSection>
      <HomeContent>
        <MeDescription>
        <p>Hi! I am</p>
          <h1>
            Eduardo Weidenbacher
          </h1>
          <h3>Developer</h3>
          <h4>I am a frontend, backend and mobile developer, passionate about new technologies and modern designs.</h4>
        </MeDescription>
        <img src="./assets/svg/web-developer.svg" alt='Programmer'/>
      </HomeContent>
    </ContainerSection>
  )
}
