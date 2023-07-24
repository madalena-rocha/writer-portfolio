import { Header } from './components/Header'
import { Section } from './components/Section'
import { Book } from './components/Book'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div id="home">
      <Header />

      <main>
        <Section title="Livros" id="books">
          <Book src="https://m.media-amazon.com/images/I/416ZtVU96OL.jpg" />
          <Book src="https://m.media-amazon.com/images/I/51VTOFxuK8L.jpg" />
          <Book src="https://m.media-amazon.com/images/I/41mWh3AktmL.jpg" />
        </Section>

        <Section title="Contos" id="tales">
          <Book src="https://m.media-amazon.com/images/I/31vHOY2oxvL.jpg" />
          <Book src="https://m.media-amazon.com/images/I/41l8NfBhJuL.jpg" />
          <Book src="https://m.media-amazon.com/images/I/51WNi7Lm5KL.jpg" />
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
