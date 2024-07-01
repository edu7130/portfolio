import React from 'react'
import { Center, ContainerSection, ErrorContainer } from '../../golbal-styles'


export const TempPage = () => {
  return (
    <ContainerSection>
        <Center>
            <ErrorContainer>
                <img src='./assets/svg/page_manteinance.svg' alt='Page in mantainence'/>
                <h2>Página en mantenimiento</h2>
            </ErrorContainer>
        </Center>
    </ContainerSection>
  )
}
