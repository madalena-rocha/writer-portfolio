import { List, X } from "phosphor-react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

import { Container, Brand, Icon, Navigation } from "./styles";

export function Header({ isMenuOpen, setIsMenuOpen }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container id="header">
      <Brand>
        <h1>Marta Machado Rocha</h1>
      </Brand>

      {!isDesktop ? (
        <Icon>
          <List
            size={24}
            className={isMenuOpen ? "hidden" : "visible"}
            onClick={() => setIsMenuOpen(true)}
          />
          <X
            size={24}
            className={isMenuOpen ? "visible" : "hidden"}
            onClick={() => setIsMenuOpen(false)}
          />
        </Icon>
      ) : (
        <Navigation>
          <ul>
            <li>
              <Link
                to="home"
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
                spy={true}
                smooth={true}
                offset={-108}
                duration={500}
              >
                Notícias
              </Link>
            </li>
          </ul>
        </Navigation>
      )}
    </Container>
  );
}
