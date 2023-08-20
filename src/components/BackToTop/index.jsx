import { ArrowCircleUp } from "phosphor-react";

import { Container } from "./styles";

export function BackToTop() {
  return (
    <Container href="#home">
      <ArrowCircleUp size={48} />
    </Container>
  );
}
