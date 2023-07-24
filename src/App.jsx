import { Header } from './components/Header'
import { Book } from './components/Book'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <Header />

      <div>
        <Book href="https://a.co/d/ivy0YRj" src="https://m.media-amazon.com/images/I/416ZtVU96OL.jpg" alt="" />
        <Book href="https://a.co/d/dR5Rul9" src="https://m.media-amazon.com/images/I/51VTOFxuK8L.jpg" alt="" />
        <Book href="https://a.co/d/8rY3mQN" src="https://m.media-amazon.com/images/I/41mWh3AktmL.jpg" alt="" />
      </div>

      <Footer />
    </>
  )
}

export default App
