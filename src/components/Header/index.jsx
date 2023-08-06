import { Container, Navigation } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Marta Machado Rocha</h1>

      <Navigation>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#books">Livros</a></li>
          <li><a href="#tales">Contos</a></li>
        </ul>
      </Navigation>
    </Container>
  );
}