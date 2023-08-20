import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Section } from "./components/Section";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";

import { Container, About, Profile } from "./App.js";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const booksData = [
    {
      src: "https://m.media-amazon.com/images/I/416ZtVU96OL.jpg",
      alt: "",
      title: "Mariana: Em Busca de um Sentido",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?",
      href: "https://a.co/d/ivy0YRj",
    },
    {
      src: "https://m.media-amazon.com/images/I/51VTOFxuK8L.jpg",
      alt: "",
      title: "Memórias e Lenços",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?",
      href: "https://a.co/d/9wLfEyE",
    },
    {
      src: "https://m.media-amazon.com/images/I/41mWh3AktmL.jpg",
      alt: "",
      title: "Vidas Entrelaçadas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?",
      href: "https://a.co/d/0Q9Pe32",
    },
  ];

  const talesData = [
    {
      src: "https://m.media-amazon.com/images/I/31vHOY2oxvL.jpg",
      alt: "",
      title: "Maldição",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?",
      href: "https://a.co/d/b7yL2iL",
    },
    {
      src: "https://m.media-amazon.com/images/I/41l8NfBhJuL.jpg",
      alt: "",
      title: "ELOS&ELAS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?",
      href: "https://a.co/d/bH6FcLg",
    },
    {
      src: "https://m.media-amazon.com/images/I/51WNi7Lm5KL.jpg",
      alt: "",
      title: "Literatura Fantástica: Revista Pulp Nacional",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?",
      href: "https://a.co/d/hl2NVyu",
    },
  ];

  return (
    <Container id="home">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isDesktop && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <main>
        <About>
          <Profile>
            <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/v0f9vlqdqo3p56bgjt02q3pdb7.jpg" />
          </Profile>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et
            nam corporis natus illum? Similique nesciunt libero, recusandae
            expedita unde error?
          </p>
        </About>

        <Section title="Livros" id="books">
          {booksData.map((book, index) => (
            <Book
              key={index}
              src={book.src}
              alt={book.alt}
              title={book.title}
              description={book.description}
              href={book.href}
            />
          ))}
        </Section>

        <Section title="Contos" id="tales">
          {talesData.map((tale, index) => (
            <Book
              key={index}
              src={tale.src}
              alt={tale.alt}
              title={tale.title}
              description={tale.description}
              href={tale.href}
            />
          ))}
        </Section>
      </main>

      <Footer />
    </Container>
  );
}

export default App;
