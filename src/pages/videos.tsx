// {% extends 'layout-publication.html' %}

// {% block title %}
// 	<title>ResumoBook | Videos</title>
// {% endblock title %}

// {% block metaRedeSocial %}
// 	<meta name="description" content="Aqui eu trarei os videos que produzirei como complemento">
// 	<meta property="og:url" content="https://resumobook.com.br/videos">
// 	<meta property="og:type" content="site">
// 	<meta property="og:title" content="Vídeos">
// 	<meta property="og:image" content="https://resumobook.com.br/images/posts/videos.png" />
// 	<meta property="og:description" content="Aqui eu trarei os videos que produzirei como complemento">
// {% endblock metaRedeSocial %}

// {% block header %}

// 	<section id="header" class="post">
// 		<h2 class="text-fundo-padrao">VÍDEOS</h2>
// 	</section>

// {% endblock header %}

// {% block titleOfPage %}

// 	<div id="titleOfPageContent" class="caixa-post-titulo-corpo">
// 		<h1 class="caixa-post-titulo-1">
// 			Desculpe, mas os vídeos ainda estão em produção
// 		</h1>
// 	</div>

// {% endblock titleOfPage %}

// {% block content %}
// 	<h2 class="text">Caso tenha alguma sugestão de vídeos, por favor deixe seu comentário</h2>
// {% endblock content %}

// {% block linkAffiliate %}
// {% endblock linkAffiliate %}

// {% block buttonShare %}
// <section class="redes-sociais-estilo">
//     <span class="caixa-post-text-1">Compartilhe!</span>
//     <div class="redes-sociais-estilo-1">
//         <button type="button" class="botao-rede-social botao-facebook" onclick="janelaPopUp('https://www.facebook.com/sharer/sharer.php?u=https://resumobook.com.br/videos')"><img src="/images/publicacoes/facebook icone.png" alt="icone facebook" width="20" height="20" class="img-rede-social">
//             <span class="rede-social-text">Compartilhe no Facebook</span></button>
//     </div>
//     <div class="redes-sociais-estilo-1">
//         <button type="button" class="botao-rede-social botao-twitter" onclick="janelaPopUp('https://twitter.com/intent/tweet?text={{places[numberPage].title}} https://resumobook.com.br/videos')">
//             <img src="/images/publicacoes/twitter icone.png" alt="icone twitter" width="20" height="20" class="img-rede-social" style="margin-left: -28px;">
//             <span class="rede-social-text">Compartilhe no Twitter</span>
//         </button>
//     </div>
//     <div class="redes-sociais-estilo-1">
//         <button type="button" class="botao-rede-social botao-whatsapp" onclick="janelaPopUp('https://api.whatsapp.com/send?text=https://resumobook.com.br/videos')"><img src="/images/publicacoes/whasapp icone.png" alt="icone WhatsApp" width="20" height="20" class="img-rede-social">
//             <span class="rede-social-text">Compartilhe no WhatsApp</span></button>
//     </div>
//     <div class="redes-sociais-estilo-1">
//         <button type="button" class="botao-rede-social botao-linkedin" onclick="janelaPopUp('https://www.linkedin.com/shareArticle?mini=true&url=https://resumobook.com.br/videos')"><img src="/images/publicacoes/linkedin icone.png" alt="icone Linkedin" width="20" height="20" class="img-rede-social">
//             <span class="rede-social-text">Compartilhe no Linkedin</span></button>
//     </div>
// </section>
// <script>
//     function janelaPopUp(URL) {
//   window.open(URL, 'janela', 'width=795, height=590, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
// }
// </script>


// {% endblock buttonShare %}

// {% block lastPost %}
// {% endblock lastPost %}


import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import { PageHeader } from "../components/PageHeader";
import { getPrismicClient } from "../services/prismic";
import { Footer } from "../components/Footer";
import { ButtonsPage } from "../components/ButtonsPage";
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
      <title>ResumoBook | Videos</title>

      <meta name="description" content='Aqui eu trarei os videos que produzirei como complemento' />
      <meta property="og:url" content={`https://resumobook.com.br/videos`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`Vídeos`} />
      <meta property="og:description" content={'Aqui eu trarei os videos que produzirei como complemento'} />
      {/* <meta property="og:image" content={`${post.banner.url}`} />
      <meta property="og:image:secure_url" content={`${post.banner.url}`} /> */}
    </Head>
      <PageHeader />

      <section className="fundo-pg-padrao">
        <h2 className="text-fundo-padrao">VÍDEOS</h2>
      </section>

      <div id="titleOfPageContent" className="caixa-post-titulo-corpo">
        <h1 className="caixa-post-titulo-1">
            Desculpe, mas os vídeos ainda estão em produção
        </h1>
      </div>

      <section>
        <article id="pageContent" className="article-padrao">
          <div className="caixa-post-padrao-1">
            <h2 className="text">Caso tenha alguma sugestão de vídeos, por favor deixe seu comentário
            </h2>

            <button type="button" className="botao-voltar" onClick={back}>Voltar</button>

            <div className="regua-horizonatal-position-1">
              <div className="regua-horizontal-corpo-1"></div>
              <img src="/images/publicacoes/compartilhe-amor-nos-diga-o-que-voce-acha.png" alt="Deixe seu comentário" width="597" height="63" className="image-compartilhe" />
            </div>
            <DiscussionEmbed
                shortname='Resumobook'
                config={
                    {
                        url: `https://resumobook-1.disqus.com/embed.js`,
                        identifier: 'videos',
                        title: 'Vídeos',
                    }
                }
            />
          </div>

          {/* <aside className="caixa-post-padrao-2">
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
          </aside> */}

        </article>
      </section>
      <ButtonsPage />
      <Footer />

    </>
  )
}


