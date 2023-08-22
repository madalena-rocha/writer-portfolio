import { Container } from "./styles";

export function BackToTop({ handleSectionScroll }) {
  return (
    <Container
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        handleSectionScroll("home");
      }}
    >
      Voltar ao topo
    </Container>
  );
}
