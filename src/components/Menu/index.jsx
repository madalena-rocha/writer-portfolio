import { Container } from "./styles";

export function Menu({ isMenuOpen }) {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#books">Livros</a></li>
        <li><a href="#tales">Contos</a></li>
      </ul>
    </Container>
  );
}