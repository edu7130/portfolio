import { ContainerSection, Center, ErrorContainer } from '../../golbal-styles'


export const ErrorPage = () => {
  return (
    <ContainerSection>
      <Center>
        <ErrorContainer>
          <img src='../assets/svg/404_2.svg' alt='Page not found 404'/>
          <h2>Page not found</h2>
        </ErrorContainer>
      </Center>
    </ContainerSection>
  )
}
