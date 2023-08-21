import { ArrowCircleUp } from "phosphor-react";

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
      <ArrowCircleUp size={48} />
    </Container>
  );
}
