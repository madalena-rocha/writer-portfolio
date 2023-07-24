import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Marta Machado Rocha</h1>

      <div>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#books">Livros</a>
        <a href="#tales">Contos</a>
      </div>
    </Container>
  );
}