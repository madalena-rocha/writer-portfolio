import { Link } from "react-scroll";

import { Container } from "./styles";

export function BackToTop() {
  return (
    <Container>
      <Link to="home" spy={true} smooth={true} offset={-108} duration={500}>
        Voltar ao topo
      </Link>
    </Container>
  );
}
