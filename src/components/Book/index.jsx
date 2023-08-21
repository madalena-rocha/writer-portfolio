import { Container, Image, Details } from "./styles";

export function Book({ src, alt, title, description, href }) {
  return (
    <Container>
      <Image>
        <img src={src} alt={alt} />
      </Image>

      <Details>
        <h2>{title}</h2>
        <div>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <a href={href} target="_blank">Comprar</a>
      </Details>
    </Container>
  );
}