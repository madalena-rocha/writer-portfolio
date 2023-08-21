import { List, X } from "phosphor-react";
import { useMediaQuery } from "react-responsive";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleSectionScroll,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container id="header">
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
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#books"
                className={activeSection === "books" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("books");
                }}
              >
                Livros
              </a>
            </li>
            <li>
              <a
                href="#tales"
                className={activeSection === "tales" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("tales");
                }}
              >
                Contos
              </a>
            </li>
            <li>
              <a
                href="#news"
                className={activeSection === "news" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionScroll("news");
                }}
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
