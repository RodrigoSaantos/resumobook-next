
import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import { ButtonsPage } from "../../components/ButtonsPage";
import { Footer } from "../../components/Footer";
import { PageHeader } from "../../components/PageHeader";
import axios from 'axios';
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Post = {
  slug: string;
  banner: string;
  title: string;
  description: string;
  updatedAt: string;
}

interface PageProps {
  posts: Post[];
}

export default function Page({ posts }: PageProps) {
  const [searchPosts, setSearchPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const client = Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT as string, {})

    client.query(
      [Prismic.predicates.at('document.tags', [search])]
    ).then(response => {
      const posts = response.results.map(post => {
        return {
          slug: post.uid as string,
          title: RichText.asText(post.data.title),
          banner: post.data.banner.url,
          description: RichText.asText(post.data.introduction),
          updatedAt: new Date(post.last_publication_date as string).toLocaleDateString(
            'pt-BR',
            {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            },
          ),
        };
      });
      setSearchPosts(posts)
    })
  
  }, [search])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log('submit')
  }
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
    <div className="box-search">
      <form onSubmit={handleSubmit}>
        <div className="search field">
            <input 
              type="text" 
              name="search" 
              placeholder="Pesquise as tags aqui" 
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            <button>
                <img src="/images/pagina-inicial/search.svg" alt="Buscar" />
            </button>
        </div>
      </form>
    </div>
      <article className="article-padrao" id="publicationsResume">

        { searchPosts.length > 0 ? (
          <>
            {searchPosts.map(post => {
              return (
                <div className="caixa-post-padrao" key={`post-${post.slug}`}>
                    <a href={`/post/${post.slug}`}>
                      <img className="box-img" src={`${post.banner}`} alt={post.title} title={post.title} />
                      <h1 className="caixa-post-titulo">
                        {post.title}<hr className="border" style={{borderColor: 'rgb(255, 126, 0)', transitionDuration: '0.3s'}} />
                      </h1>
                        <p className="caixa-post-text">{post.description}</p>
                    </a>
                    <div className="read-more">
                        <a href={`/post/${post.banner}`}>Leia mais ➭</a>
                    </div>
                </div>
              )
            })}
          </>
        ) : (
          <>
            {posts.map(post => {
              return (
                <div className="caixa-post-padrao" key={`post-${post.slug}`}>
                    <a href={`/post/${post.slug}`}>
                      <img className="box-img" src={`${post.banner}`} alt={post.title} title={post.title} />
                      <h1 className="caixa-post-titulo">
                        {post.title}<hr className="border" style={{borderColor: 'rgb(255, 126, 0)', transitionDuration: '0.3s'}} />
                      </h1>
                        <p className="caixa-post-text">{post.description}</p>
                    </a>
                    <div className="read-more">
                        <a href={`/post/${post.banner}`}>Leia mais ➭</a>
                    </div>
                </div>
              )
            })}
          </>
        )}
      </article>
    </section>

    <ButtonsPage />
    <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]',
      fetch: ['post.title', 'post.banner', 'post.introduction'],
      pageSize: 100,
    },
  );

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      banner: post.data.banner.url,
      description: RichText.asText(post.data.introduction),
      updatedAt: new Date(post.last_publication_date as string).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });
  return {
    props: {
      posts,
    },
  };
};


