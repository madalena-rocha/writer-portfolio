import { Link } from "react-scroll";

import { Container } from "./styles";

export function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <Container className={isMenuOpen ? "visible" : "hidden"}>
      <ul>
        <li>
          <Link
            to="home"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-108}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="books"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-108}
            duration={500}
          >
            Livros
          </Link>
        </li>
        <li>
          <Link
            to="tales"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-108}
            duration={500}
          >
            Contos
          </Link>
        </li>
        <li>
          <Link
            to="news"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-108}
            duration={500}
          >
            Notícias
          </Link>
        </li>
      </ul>
    </Container>
  );
}
