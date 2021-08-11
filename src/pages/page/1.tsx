
import Head from "next/head";
import { useEffect, useState } from "react";
import { ButtonsPage } from "../../components/ButtonsPage";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import axios from 'axios';

type PostProps = {
  "url": string;
  "thumb": string;
  "authorThumb": string;
  "title": string;
  "text": string;
  "idpost": string;
}

export default function Falecom() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then(response => {
      setPosts(response.data)
    })
  }, [])
  return (
    <>
    <Head>
      <title>ResumoBook | Page 1</title>
      <meta name="description" content="O melhor dos resumos dos livros" />
      <meta property="og:url" content="https://resumobook.com.br" />
      <meta property="og:type" content="site" />
      <meta property="og:title" content="ResumoBook" />
      <meta property="og:description" content="O melhor dos resumos dos livros" />
    </Head>

    <PageHeader />

    <section id="about">
      <article className="about-myself">
      
        <h2 className="text-sobremim"> POST</h2>
      
        <img src="images/pagina-inicial/iconedown.png" alt="icone down" height="15" width="22" className="icone" />
      </article>
    </section>

    <section>
      <article className="article-padrao" id="publicationsResume">


          {/* <div className="caixa-post-padrao" id="post-{{place.id}}">
              <a href="/post/{{place.url}}">
                <img className="box-img" src="{{place.image}}" alt="{{place.title}}" title="{{place.authorImage}}" />
                <h1 className="caixa-post-titulo">
                  {{place.title}}<hr className="border" style={{borderColor: 'rgb(255, 126, 0)', transitionDuration: '0.3s'}} />
                </h1>
                  <p className="caixa-post-text">{{place.description}}</p>
              </a>
              <div className="read-more">
                  <a href="/post/{{place.url}}">Leia mais ➭</a>
              </div>
          </div> */}



      </article>
    </section>

    <ButtonsPage />
    <Footer />
    </>
  )
}


