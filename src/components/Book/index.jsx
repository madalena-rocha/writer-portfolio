import { Container } from "./styles";

export function Book({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
}