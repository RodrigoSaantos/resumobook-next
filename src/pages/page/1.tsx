
import Head from "next/head";
import { useEffect, useState } from "react";
import { ButtonsPage } from "../../components/ButtonsPage";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import axios from 'axios';

type PostProps = {
  url: string;
  thumb: string;
  authorThumb: string;
  title: string;
  text: string;
  idpost: string;
}

export default function Falecom() {
  const [posts, setPosts] = useState<PostProps[]>([]);

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

    <section id="header" className="post">
        <h2 className="text-fundo-padrao">POST</h2>
    </section>

    <section>
      <article className="article-padrao" id="publicationsResume">

        {posts.map(post => {
          return (
            <div className="caixa-post-padrao" id={`post-${post.idpost}`}>
                <a href={`/post/${post.url}`}>
                  <img className="box-img" src={`${post.thumb}`} alt={post.title} title={post.authorThumb} />
                  <h1 className="caixa-post-titulo">
                    {post.title}<hr className="border" style={{borderColor: 'rgb(255, 126, 0)', transitionDuration: '0.3s'}} />
                  </h1>
                    <p className="caixa-post-text">{post.text}</p>
                </a>
                <div className="read-more">
                    <a href={`/post/${post.url}`}>Leia mais ➭</a>
                </div>
            </div>
          )
        })}
      </article>
    </section>

    <ButtonsPage />
    <Footer />
    </>
  )
}


