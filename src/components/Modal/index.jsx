import { X } from 'phosphor-react';

import { Container, Image, Details } from "./styles";

export function Modal({ src, alt, title, description, href }) {
  return (
    <Container>
      <Image>
        <img src={src} alt={alt} />
      </Image>

      <Details>
        <X size={24} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href} target="_blank">Comprar</a>
      </Details>
    </Container>
  );
}