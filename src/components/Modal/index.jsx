import { X } from 'phosphor-react';

import { Container } from "./styles";

export function Modal({ src, alt, title, description, href }) {
  return (
    <Container>
      <img src={src} alt={alt} />

      <div>
        <X size={24} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href} target="_blank">Comprar</a>
      </div>
    </Container>
  );
}