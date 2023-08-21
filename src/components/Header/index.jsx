import { List, X } from "phosphor-react";
import { useMediaQuery } from "react-responsive";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen, activeSection }) {
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
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#books"
                className={activeSection === "books" ? "active" : ""}
              >
                Livros
              </a>
            </li>
            <li>
              <a
                href="#tales"
                className={activeSection === "tales" ? "active" : ""}
              >
                Contos
              </a>
            </li>
            <li>
              <a
                href="#news"
                className={activeSection === "news" ? "active" : ""}
              >
                Notícias
              </a>
            </li>
          </ul>
        </Navigation>
      )}
    </Container>
  );
}
