import { List, X } from "phosphor-react";
import { useMediaQuery } from "react-responsive";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <Brand>
        <h1>Marta Machado Rocha</h1>
      </Brand>

      {!isDesktop ? (
        <Icon isMenuOpen={isMenuOpen}>
          <List size={24} onClick={() => setIsMenuOpen(true)} />
          <X size={24} onClick={() => setIsMenuOpen(false)} />
        </Icon>
      ) : (
        <Navigation>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#books">Livros</a></li>
            <li><a href="#tales">Contos</a></li>
            <li><a href="#news">Notícias</a></li>
          </ul>
        </Navigation>
      )}
    </Container>
  );
}