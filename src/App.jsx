import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Section } from "./components/Section";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";

import { Container, About, Profile } from "./App.js";

function App() {
  const booksData = [
    {
      src: "https://m.media-amazon.com/images/I/416ZtVU96OL.jpg",
      alt: "",
    },
    {
      src: "https://m.media-amazon.com/images/I/51VTOFxuK8L.jpg",
      alt: "",
    },
    {
      src: "https://m.media-amazon.com/images/I/41mWh3AktmL.jpg",
      alt: "",
    },
  ];

  const talesData = [
    {
      src: "https://m.media-amazon.com/images/I/31vHOY2oxvL.jpg",
      alt: "",
    },
    {
      src: "https://m.media-amazon.com/images/I/41l8NfBhJuL.jpg",
      alt: "",
    },
    {
      src: "https://m.media-amazon.com/images/I/51WNi7Lm5KL.jpg",
      alt: "",
    },
  ];

  return (
    <Container id="home">
      <Header />

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

        <Modal
          href="https://a.co/d/ivy0YRj"
          src="https://m.media-amazon.com/images/I/416ZtVU96OL.jpg"
          title="Mariana Em Busca de um Sentido"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, neque tenetur placeat, odit suscipit quasi eos nihil, et nam corporis natus illum? Similique nesciunt libero, recusandae expedita unde error?"
        />

        <Section title="Livros" id="books">
          {booksData.map((book, index) => (
            <Book key={index} src={book.src} alt={book.alt} />
          ))}
        </Section>

        <Section title="Contos" id="tales">
          {talesData.map((tale, index) => (
            <Book key={index} src={tale.src} alt={tale.alt} />
          ))}
        </Section>
      </main>

      <Footer />
    </Container>
  );
}

export default App;
