import { Container } from "./styles";

export function New({ href, title, date }) {
  return (
    <Container href={href} target="_blank">
      <h2>{title}</h2>
      <p>{date}</p>
    </Container>
  );
}