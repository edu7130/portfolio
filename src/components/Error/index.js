import { Link } from 'react-router-dom'
import { ContainerSection, Center, ErrorContainer, LinkContainer } from '../../golbal-styles'


export const ErrorPage = () => {
  return (
    <ContainerSection>
      <Center>
        <ErrorContainer>
          <img src={`${process.env.PUBLIC_URL}/assets/svg/404_2.svg`} alt='Page not found 404' />
          <h2>Página no encontrada</h2>
          <LinkContainer>
            <Link to='/'>Ir a inicio</Link>
          </LinkContainer>
        </ErrorContainer>
      </Center>
    </ContainerSection>
  )
}
