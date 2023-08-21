import { Container } from "./styles";

export function Menu({ isMenuOpen, activeSection }) {
  return (
    <Container isMenuOpen={isMenuOpen}>
      <ul>
        <li>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
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
          <a href="#news" className={activeSection === "news" ? "active" : ""}>
            Notícias
          </a>
        </li>
      </ul>
    </Container>
  );
}
