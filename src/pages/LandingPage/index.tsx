import React from 'react';
import HeaderBar from '../../components/HeaderBar';
import { Container, FigureSection, TextSection } from './styles';

export default function LandingPage(): JSX.Element {
  return (
    <>
      <HeaderBar />
      <Container>
        <TextSection>
          <h1>O maior banco de devs do Brasil</h1>
          <p>
            Nao importa se front ou back end, fazer networking e muito
            importante. Faça parte da maior comunidade de desenvolvedores
            brasileiros.
          </p>
        </TextSection>
        <FigureSection>
          <img src="img/programador-main.svg" alt="Programador" />
        </FigureSection>
      </Container>
    </>
  );
}
