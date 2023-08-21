import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Section } from "./components/Section";
import { Book } from "./components/Book";
import { New } from "./components/New";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

import { Container, About, Profile, Presentation } from "./App.js";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const booksData = [
    {
      src: "https://m.media-amazon.com/images/I/416ZtVU96OL.jpg",
      alt: "",
      title: "Mariana: Em Busca de um Sentido",
      description: `A trajetória de Mariana nunca foi fácil. Conflitos familiares, problemas emocionais e dificuldades financeiras sempre fizeram parte do seu dia a dia.
        Tudo o que ela mais queria era ter uma vida diferente daquela que levava na casa dos pais. Porém, a estrada para o autoconhecimento não é apenas longa, mas também árdua.
        Presa nas teias da ilusão, Mariana vê seus sonhos caírem por terra quando o primogênito começa a apresentar um comportamento indesejado. Apontada como culpada pelos atos do filho, ela se depara com um mal que já afligia a família há bastante tempo. Os transtornos psicológicos.
        Dividida entre a crença e a negação, a jovem mãe logo descobre que, para ajudar os outros, antes é preciso ajudar a si mesma. Uma jornada que a levará a se perder. E depois, se encontrar.`,
      href: "https://a.co/d/ivy0YRj",
    },
    {
      src: "https://m.media-amazon.com/images/I/51VTOFxuK8L.jpg",
      alt: "",
      title: "Memórias e Lenços",
      description: `O tempo passa, destrói, reconstrói, muda. Nada permanece imaculado pelas mãos insensíveis do tempo. O que nos resta de tudo o que vivemos são as lembranças. Já adulta, durante as férias em Riacho Novo, Geovana encontra uma caixa que estava há muito tempo esquecida em um velho guarda-roupa. Dentro dela estavam seus lenços e muitas memórias.
        Em uma viagem pelo passado, ela lembra dos seus 16 anos, quando era apenas uma garota apaixonada pelo namorado, que se ocupava com os estudos e com o gatinho que havia encontrado abandonado, além de visitar Laura e Miguel, seus melhores amigos.
        Em meio à interferência de familiares em sua vida, ela sonha com a liberdade. Com a chegada de seu insuportável irmão, a pressão para que se casasse se tornou cada vez maior, porém, ela possuía outros planos.
        A vida exigiu decisões difíceis para conseguir a tão sonhada independência financeira e problemas de saúde abalaram sua frágil autoestima, restando a ela, lutar com todas as forças por um final feliz.`,
      href: "https://a.co/d/9wLfEyE",
    },
    {
      src: "https://m.media-amazon.com/images/I/41mWh3AktmL.jpg",
      alt: "",
      title: "Vidas Entrelaçadas",
      description: `Bem-vindos às Terras Ocultas, um lugar cheio de lendas e mistérios!
        Aqui você conhecerá Pedro, um tranquilo morador do Vale que vê sua vida desmoronar ao confirmar o envolvimento da esposa com Eduardo. Para piorar as coisas, Nandinho, antigo inimigo de Pedro, que vivia há anos do outro lado das montanhas, volta para colocar em prática o seu plano.
        Em meio à tristeza e o abuso de álcool, Pedro recebe a visita de um misterioso ser em seus sonhos, a quem chama de "amigo secreto". Aos poucos, fatos estranhos se tornam cada vez mais presentes em sua vida.
        Após se tornar cadeirante, ele vê Nandinho ganhar poderes e iniciar uma grande perseguição no Vale. Então, seu amigo lhe revela que ele é o escolhido para devolver a tranquilidade para aquelas terras.
        Para isso, ele contará com a ajuda das pessoas mais improváveis, terá que rever suas intrigas pessoais e iniciar sua jornada rumo às montanhas à procura de respostas.`,
      href: "https://a.co/d/0Q9Pe32",
    },
  ];

  const talesData = [
    {
      src: "https://m.media-amazon.com/images/I/31vHOY2oxvL.jpg",
      alt: "",
      title: "Maldição",
      description: `Apesar de saber a gravidade do seu crime, Zezão achou que tudo ficaria bem quando sua prima Yane, persuadida pelos próprios familiares, retirou a acusação que pesava sobre ele e Berto, seu amigo.
        Porém, ele não poderia estar mais enganado, pois não demorou até que coisas estranhas começassem a acontecer.`,
      href: "https://a.co/d/b7yL2iL",
    },
    {
      src: "https://m.media-amazon.com/images/I/41l8NfBhJuL.jpg",
      alt: "",
      title: "Elos&Elas",
      description: `Esta obra é resultado da ação de um conjunto de mulheres escritoras, que se conheceram durante a construção de uma Antologia. Deste encontro, resultou a criação de um grupo no Instagram, o qual leva o título do presente livro. Tal composição foi definida em meio ao lanche da tarde de um agradável dia de outono, em maio de 2022. Entre goles de café e prosas animadas, a intenção foi firmada:  lançar à dignidade do vento os nomes, os escritos, os elos e os zelos. Mas, o vento trouxe uma surpresa e o intento ganhou simpatizantes. Se, inicialmente, contava-se dezessete escritoras, agora conta-se vinte e três. Entre poemas, contos, crônicas e narrativas, um fio condutor foi tecido: a amizade, a lealdade e a união – e outros subtemas que se comunicam. Cada qual com seu toque e sua tonalidade. Que o resultado dessa tessitura cante em sua alma, como o canto do tear ecoa na aragem.`,
      href: "https://a.co/d/bH6FcLg",
    },
    {
      src: "https://m.media-amazon.com/images/I/51WNi7Lm5KL.jpg",
      alt: "",
      title: "Literatura Fantástica: Revista Pulp Nacional",
      description: `A Revista Literatura Fantástica é um projeto periódico pulp, sendo esta sua primeira edição.
        Aqui, o leitor encontrará futuros distópicos, casas assombradas, agrestes e sertões futuristas, aventuras espaciais, monstros exóticos, criaturas abissais, horrores insondáveis, ruas cariocas repletas de anjos e demônios, histórias de fantasmas, tecnologias mirabolantes, seres além de nossa compreensão, divindades, utopias, os elementos surreais de um Brasil profundo e muito mais.
        Prepare-se para quase 60 aventuras elaboradas por diversos autores, que compõem diferentes vozes da Literatura Fantástica do Brasil; formando o que talvez seja a coletânea mais diversificada em temas e autores já criada no país.
        Todos os royalties serão revertidos para ações beneficentes.`,
      href: "https://a.co/d/hl2NVyu",
    },
  ];

  const newsData = [
    {
      href: "https://doidosporserieselivros.blogspot.com/2023/01/lancamento-de-marta-machado-rocha.html?m=1&fbclid=IwAR1P0t7P_56sAvXsqoXHdWINZaOl6bkJ1GxBll1lhlwI5NRJCOiOs5tgrDk",
      title: "Doidos por Séries e Livros",
      date: "19 janeiro 2023",
    },
    {
      href: "https://ummergulhonaliteratura.blogspot.com/2021/07/entrevista-com-autora-marta-machado.html?m=1&fbclid=IwAR3TFL9LuooCpN-5zx1bzVSIv0oISGNxyRY5qLgubGUzAARta3GJAlCil1U",
      title: "Um Mergulho na Literatura",
      date: "16 julho 2021",
    },
    {
      href: "https://elizaeedgar.wixsite.com/entrecantosecontos/post/m%C3%A1culas-do-tempo?fbclid=IwAR1r7ATJSNCdURYRZSxZR--WxsC2xv0W56CWczj4hfP0Kw0V3aglI93fDfE",
      title: "Máculas do Tempo",
      date: "5 julho 2021",
    },
    {
      href: "https://dipapocomdudu.webnode.page/copia-de-2020/?fbclid=IwAR3NpSFzanFqGg6k6l0nZ0MZ9JxSpIh4MBpaKvs6MQHvwoZyUc8rFlqpMfY",
      title: "Di Papo com Dudu",
      date: "abril 2021",
    },
    {
      href: "https://novodiarionoticias.blogspot.com/2020/08/entrevista-com-autora-marta-machado.html?fbclid=IwAR3yeMo7WEVbmH8MF01Yi5jNfRkgPYuyzc3dVwIVdJKjQUCNnrS93Zh8PZo",
      title: "Diário de Notícias",
      date: "24 agosto 2020",
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

          <Presentation>
            <p>
              Sou baiana nascida na cidade de Irecê. Cresci entre as cidades de
              Uibaí, onde realizei os estudos da educação básica e comecei a me
              interessar pela leitura e a escrita, e Central, cidade em que se
              localiza a propriedade rural da minha família.
            </p>
            <p>
              Após completar meus estudos, cursei pedagogia. Sou mãe de quatro
              filhos, e minha rotina é dividida entre os cuidados com as
              crianças, a dedicação à escrita e à leitura, e também alguns
              trabalhos voluntários na área pedagógica.
            </p>
          </Presentation>
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

        <Section title="Notícias" id="news">
          {newsData.map((notice, index) => (
            <New
              key={index}
              href={notice.href}
              title={notice.title}
              date={notice.date}
            />
          ))}
        </Section>
      </main>

      <BackToTop />

      <Footer />
    </Container>
  );
}

export default App;
