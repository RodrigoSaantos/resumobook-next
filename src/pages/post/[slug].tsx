import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import { PageHeader } from "../../components/PageHeader";
import { getPrismicClient } from "../../services/prismic";
import { Footer } from "../../components/Footer";
import { ButtonsPage } from "../../components/ButtonsPage";
import { DiscussionEmbed } from 'disqus-react'
import Prismic from '@prismicio/client';
import Head from "next/head";
import Router from "next/router";

type Post = {
  slug: string;
  banner: string;
  title: string;
  description: string;
  updatedAt: string;
}

interface PostProps {
  post: {
    slug: string;
    title: string;
    introduction: string;
    banner: {
      url: string;
    };
    content: string;
    affiliate: string;
    ended: string;
    started: string;
    date: string;
  },
  lastPosts: Post[];
}

export default function Post({
  post,
  lastPosts,
}: PostProps) {

  function janelaPopUp(URL: string) {
    window.open(URL, 'janela', 'width=795, height=590, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
  }

  function back() {
    Router.back();
  }

  return (
    <>
    <Head>
      <title>ResumoBook | {post.title}</title>

      <meta name="description" content={post.introduction} />
      <meta property="og:url" content={`https://resumobook.com.br/post/${post.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${post.title}`} />
      <meta property="og:description" content={post.introduction} />
      <meta property="og:image" content={`${post.banner.url}`} />
      <meta property="og:image:secure_url" content={`${post.banner.url}`} />
    </Head>
      <PageHeader />

      <section className="fundo-pg-padrao">
        <h2 className="text-fundo-padrao">POST</h2>
      </section>

      <div id="titleOfPageContent" className="caixa-post-titulo-corpo">
        <h1 className="caixa-post-titulo-1">
          {post.title}
        </h1>
      </div>

      <section>
        <article id="pageContent" className="article-padrao">
          <div className="caixa-post-padrao-1">
            <p className="caixa-post-text-1">
              <strong style={{ color: 'black'}}>
                {post.introduction}
              </strong>
            </p>
            <img src={post.banner.url} alt="" />
            <p className="caixa-post-text-1">
              {post.started}
            </p>

            <div id='post-content' dangerouslySetInnerHTML={{__html: post.content}} />


            <button type="button" className="botao-voltar" onClick={back}>Voltar</button>

            <div className="regua-horizonatal-position-1">
              <a href={`${post.affiliate}`} target="_blank">
                <button type="button" className="botao botao-centralizado">Caso queira adquirir o livro clique aqui</button>
              </a>
              <div className="regua-horizontal-corpo-1"></div>
              <img src="/images/publicacoes/compartilhe-amor-nos-diga-o-que-voce-acha.png" alt="Deixe seu comentário" width="597" height="63" className="image-compartilhe" />
            </div>
            <DiscussionEmbed
                shortname='Resumobook'
                config={
                    {
                        url: `https://resumobook-1.disqus.com/embed.js`,
                        identifier: post.slug,
                        title: post.title,
                    }
                }
            />
          </div>

          <aside className="caixa-post-padrao-2">
            <section className="redes-sociais-estilo">
              <span className="caixa-post-text-1">Compartilhe!</span>
              <div className="redes-sociais-estilo-1">
                <button type="button" className="botao-rede-social botao-facebook" onClick={() => janelaPopUp(`https://www.facebook.com/sharer/sharer.php?u=https://resumobook.com.br/post/${post.slug}`)}><img src="/images/publicacoes/facebook icone.png" alt="icone facebook" width="20" height="20" className="img-rede-social" />
                  <span className="rede-social-text">Compartilhe no Facebook</span></button>
              </div>
              <div className="redes-sociais-estilo-1">
                <button type="button" className="botao-rede-social botao-twitter" onClick={() => janelaPopUp(`https://twitter.com/intent/tweet?text={{places[numberPage].title}} https://resumobook.com.br/post/${post.slug}`)}>
                  <img src="/images/publicacoes/twitter icone.png" alt="icone twitter" width="20" height="20" className="img-rede-social" style={{ marginLeft: "-28px"}} />
                  <span className="rede-social-text">Compartilhe no Twitter</span>
                </button>
              </div>
              <div className="redes-sociais-estilo-1">
                <button type="button" className="botao-rede-social botao-whatsapp" onClick={() => janelaPopUp(`https://api.whatsapp.com/send?text=https://resumobook.com.br/post/${post.slug}`)}><img src="/images/publicacoes/whasapp icone.png" alt="icone WhatsApp" width="20" height="20" className="img-rede-social" />
                  <span className="rede-social-text">Compartilhe no WhatsApp</span></button>
              </div>
              <div className="redes-sociais-estilo-1">
                <button type="button" className="botao-rede-social botao-linkedin" onClick={() => janelaPopUp(`https://www.linkedin.com/shareArticle?mini=true&url=https://resumobook.com.br/post/${post.slug}`)}><img src="/images/publicacoes/linkedin icone.png" alt="icone Linkedin" width="20" height="20" className="img-rede-social" />
                  <span className="rede-social-text">Compartilhe no Linkedin</span></button>
              </div>

              
            </section>
          </aside>

        </article>

        <section className="article-padrao">
            <p className="last-post-text">Últimos Posts</p>

            {lastPosts.map(post => {
              return (
                <article className="last-post-box" style={{ borderBottom: 'none'}} key={post.slug}>
                  <a href={post.slug}>
                    <img className="box-img" src={post.banner} alt={post.title} title={post.title}/>
                      <h1 className="caixa-post-titulo">{post.title}<hr className="border" /></h1>
                  </a>
                </article>
              )
            })}
        </section>
      </section>
      <ButtonsPage />
      <Footer />

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {

  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    introduction: RichText.asText(response.data.introduction),
    banner: response.data.banner,
    content: RichText.asHtml(response.data.content),
    affiliate: response.data.affiliate.url,
    started: response.data.started,
    ended: response.data.ended,
    date: response.data.date,
    //   updatedAt: new Date(response.last_publication_date).toLocaleDateString(
    //     'pt-BR',
    //     {
    //       day: '2-digit',
    //       month: 'long',
    //       year: 'numeric',
    //     },
    //   ),
  };

  const lastPostResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]',
      fetch: ['post.title', 'post.banner', 'post.introduction'],
      pageSize: 3,
    },
  );

  const lastPosts = lastPostResponse.results.map(post => {
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
      post,
      lastPosts,
    },
  };
};