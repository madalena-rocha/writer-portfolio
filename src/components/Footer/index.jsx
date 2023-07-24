import { InstagramLogo, FacebookLogo } from 'phosphor-react';

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <p>© 2023 Marta Machado Rocha</p>

      <div>
        <a href="https://www.instagram.com/marta.machado.rocha/" target="_blank"><InstagramLogo size={32} /></a>
        <a href="https://www.facebook.com/marta.machadorocha.5" target="_blank"><FacebookLogo size={32} /></a>
      </div>
    </Container>
  );
}