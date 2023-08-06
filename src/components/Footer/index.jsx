import { InstagramLogo, FacebookLogo } from "phosphor-react";

import { Container, Copyright, SocialMedia } from "./styles";

export function Footer() {
  return (
    <Container>
      <Copyright>
        <p>© 2023 Marta Machado Rocha</p>
        <p>Todos os direitos reservados.</p>
      </Copyright>

      <SocialMedia>
        <a
          href="https://www.instagram.com/marta.machado.rocha/"
          target="_blank"
        >
          <InstagramLogo size={24} />
        </a>
        <a href="https://www.facebook.com/marta.machadorocha.5" target="_blank">
          <FacebookLogo size={24} />
        </a>
      </SocialMedia>
    </Container>
  );
}
