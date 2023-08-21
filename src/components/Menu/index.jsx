import { Container } from "./styles";

export function Menu({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  handleSectionScroll,
}) {
  return (
    <Container className={isMenuOpen ? 'visible' : 'hidden'}>
      <ul>
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              handleSectionScroll("home");
              setIsMenuOpen(false);
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
              setIsMenuOpen(false);
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
              setIsMenuOpen(false);
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
              setIsMenuOpen(false);
            }}
          >
            Notícias
          </a>
        </li>
      </ul>
    </Container>
  );
}
