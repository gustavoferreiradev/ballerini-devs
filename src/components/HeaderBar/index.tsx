import React from 'react';
import { Container, IconToolbar, LogoWrapper, SearchBar } from './styles';

export default function HeaderBar(): JSX.Element {
  return (
    <Container>
      <IconToolbar>
        <figure>
          <a
            href="https://www.linkedin.com/company/comunidadeballerini/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="icons/linkedin.svg" alt="Linkedin" title="Linkedin" />
          </a>
        </figure>
        <figure>
          <img src="icons/facebook.svg" alt="Facebook" title="Facebook" />
        </figure>
        <figure>
          <a
            href="https://discord.gg/wagxzStdcR"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="icons/discord.svg" alt="Discord" title="Discord" />
          </a>
        </figure>
      </IconToolbar>
      <LogoWrapper>
        <img src="img/Logo.svg" alt="Ballerini Devs" title="Ballerini Devs" />
      </LogoWrapper>
      <SearchBar placeholder="Buscar" />
    </Container>
  );
}
