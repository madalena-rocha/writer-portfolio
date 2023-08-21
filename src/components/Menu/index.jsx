import { Container } from "./styles";

export function Menu({ isMenuOpen, activeSection, handleSectionScroll }) {
  return (
    <Container isMenuOpen={isMenuOpen}>
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
    </Container>
  );
}
