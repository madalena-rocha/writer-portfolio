import { X } from 'phosphor-react';

import { Container, Details } from "./styles";

export function Modal({ src, alt, title, description, href }) {
  return (
    <Container>
      <img src={src} alt={alt} />

      <Details>
        <X size={24} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href} target="_blank">Comprar</a>
      </Details>
    </Container>
  );
}