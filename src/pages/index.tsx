import Head from "next/head";
import React from "react";
import { ButtonsPage } from "../components/ButtonsPage";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";

export default function Home() {
  return (
    <>
    <Head>
      <title>ResumoBook</title>
      <meta name="description" content="O melhor dos resumos dos livros" />
      <meta property="og:url" content="https://resumobook.com.br" />
      <meta property="og:type" content="site" />
      <meta property="og:title" content="ResumoBook" />
      <meta property="og:description" content="O melhor dos resumos dos livros" />
    </Head>

    <PageHeader />

    <section className="fundo-inicial" id="inicial">
      <h2 className="hero_header">Resumo <span className="light">BOOK</span></h2>
      <p className="tagline">Aquilo que não está crescendo, está morrendo</p>
    </section>



<section id="post">
      <div className="background-book"></div>
      <div className="post_corpo">
        <div className="title-body">
          <h1 className="post_titulo">POST</h1>
          <h2 className="principais_post_titulo">Principais</h2>
        </div>
        
        
        <div className="post_cabecario">
          <img src="images/pagina-inicial/iphone-capa.png" className="image-iphone" alt="" />
          <div className="regua-vertical-postion">
            <div className="regua-vertical-corpo"></div>
          </div>	  
    

          <div className="post_blog">
            <h2 className="text_column post_menu">Blog</h2>
            <a href="page/1" className="link-s-decoracao">
              <p className="text_column">
                Bem-vindos ao site, aqui compartilharei as principais ideias dos livros que venho lendo, assim você poderá analisar pontos no qual passou despercebido ou com uma compreensão diferente da minha.
              </p>
            </a>
            <a href="page/1" className="link-s-decoracao">
              <p className="text_column">
                <button type="button" className="botao">
                  quero ver as postagens
                </button>
              </p>
            </a>
          </div>
      
          <div className="post_videos">
            <h2 className="text_column post_menu">Videos</h2>	
            <a href="videos" className="link-s-decoracao">
              <p className="text_column">
                Se você deseja ver os resumos feitos em animações porque está com dúvida se deve realmente ler e quer uma apresentação dos pontos principais que o livro aborda.<br /><br />Compartilho aqui todos os meus videos para facilitar a sua procura.
              </p>
            </a>
            <a href="videos">
              <p className="text_column">
                <button type="button" className="botao">
                  quero ver os videos
                </button>
              </p>
            </a>
          </div>
          
          <div className="post_recomendacao">
            <h2 className="text_column post_menu">Recomendações</h2>
            <a href="recomendacoes"><p className="text_column">Caso esteja procurando algum livro para ler e gostaria de alguma sugestão, trago aqui alguns livros que tive o prazer de ler.<br /><br />Trago livros de desenvolvimento pessoal e profissional. </p></a>
            <a href="recomendacoes"><p className="text_column"><button type="button" className="botao">quero ver as recomendações</button></p></a>
          </div>
        
        </div>
      </div>
    </section>

    <div className="gallery">
      <a href="post/seja-proativo">
        <div className="thumbnail thumbnail-1">
          <h3 className="stats">Hábito 1 - Seja proativo</h3>
        </div>
      </a>
      <a href="post/as-pessoas-rica-agem-apesar-do-medo">
        <div className="thumbnail thumbnail-2">
          <h3 className="stats">As pessoas ricas<br />agem apesar do medo</h3>
        </div>
      </a>
      <a href="post/tempo-produtivo-ou-morto">
        <div className="thumbnail thumbnail-3">
          <h3 className="stats">Tempo produtivo<br />ou tempo morto?</h3>
        </div>
      </a>
      <a href="post/a-lei-da-represalia">
        <div className="thumbnail thumbnail-4">
          <h3 className="stats">A lei da represália</h3>
        </div>
      </a>
    </div>

    <section id="about">
      <article className="about-myself">
      
        <h2 className="text-sobremim"> SOBRE MIM</h2>
      
        <img src="images/pagina-inicial/iconedown.png" alt="icone down" height="15" width="22" className="icone" />
      </article>
    </section>

    <section>
      <article className="sobremim-corpo">
        <h2 className="hero_header-2">Resumo <span className="light">BOOK</span></h2>
        <p>O criador desse material descobriu a paixão pelo aprendizado adquirido pela leitura de livros e desde então não parou em buscar novos conhecimentos e acredita que todos deviam ter o mínimo de autoconhecimento e não fazer as coisas só porque elas sempre foram feitas da mesma maneira, por isso criei esse portal para que mais pessoas tenha acesso e trazer mudanças significativas em suas vidas.  </p>
        <p> Meu intuito é que mais pessoas, assim como eu, saia do seu piloto automático e passe a saborear mais a vida. </p>
        <div className="regua">
          <div className="regua-2"></div>
          <div className="regua-2"></div>
        </div>
        <img src="images/pagina-inicial/iconedown.png" alt="icone down" height="15" width="22" className="icone" />
      </article>
    </section>

    <ButtonsPage />
    <Footer />
    </>
  )
}
