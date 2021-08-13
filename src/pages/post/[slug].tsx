import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import { PageHeader } from "../../components/PageHeader";
import { getPrismicClient } from "../../services/prismic";
import styled from 'styled-components';
import React from "react";
import { Footer } from "../../components/Footer";
import { ButtonsPage } from "../../components/ButtonsPage";

const Content = styled.div`
  h2 { 
    margin: 20px auto 20px;
    text-align: left;
    font-weight: 600;
    font-size: 1.9rem;
    display: flex;
    flex-direction: column-reverse;

    strong {
      margin-bottom: 10px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 65px;
      border: 1px solid #FF7e00;

    }
  }
  h3 {
    border-left: 1.5px solid #FF7E00;
    margin: 0px auto 10px auto;
    font-size: 22px;
    font-style: italic;
    text-align: left;
    padding-left: 30px;
    font-weight: 100;
  }
  p {
    margin: 20px auto 20px;
    font-size: 20px;
    color: #808080;
    text-align: left;
  }
`;

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
  }
}

export default function Post({
  post
}: PostProps) {

  function janelaPopUp(URL: string) {
    window.open(URL, 'janela', 'width=795, height=590, top=100, left=699, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
  }

  return (
    <>
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

            <Content dangerouslySetInnerHTML={{__html: post.content}} />


            <button type="button" className="botao-voltar">Voltar</button>

            <div className="regua-horizonatal-position-1">
              <a href="{{places[numberPage].customLinkAffiliate}}" target="_blank">
                <button type="button" className="botao botao-centralizado">Caso queira adquirir o livro clique aqui</button>
              </a>
              <div className="regua-horizontal-corpo-1"></div>
              <img src="/images/publicacoes/compartilhe-amor-nos-diga-o-que-voce-acha.png" alt="Deixe seu comentário" width="597" height="63" className="image-compartilhe" />
            </div>
          </div>

          <aside className="caixa-post-padrao-2">
          <section className="redes-sociais-estilo">
            <span className="caixa-post-text-1">Compartilhe!</span>
            <div className="redes-sociais-estilo-1">
              <button type="button" className="botao-rede-social botao-facebook" onClick={() => janelaPopUp('https://www.facebook.com/sharer/sharer.php?u=https://resumobook.com.br/recomendacoes')}><img src="/images/publicacoes/facebook icone.png" alt="icone facebook" width="20" height="20" className="img-rede-social" />
                <span className="rede-social-text">Compartilhe no Facebook</span></button>
            </div>
            <div className="redes-sociais-estilo-1">
              <button type="button" className="botao-rede-social botao-twitter" onClick={() => janelaPopUp('https://twitter.com/intent/tweet?text={{places[numberPage].title}} https://resumobook.com.br/recomendacoes')}>
                <img src="/images/publicacoes/twitter icone.png" alt="icone twitter" width="20" height="20" className="img-rede-social" style={{ marginLeft: "-28px"}} />
                <span className="rede-social-text">Compartilhe no Twitter</span>
              </button>
            </div>
            <div className="redes-sociais-estilo-1">
              <button type="button" className="botao-rede-social botao-whatsapp" onClick={() => janelaPopUp('https://api.whatsapp.com/send?text=https://resumobook.com.br/recomendacoes')}><img src="/images/publicacoes/whasapp icone.png" alt="icone WhatsApp" width="20" height="20" className="img-rede-social" />
                <span className="rede-social-text">Compartilhe no WhatsApp</span></button>
            </div>
            <div className="redes-sociais-estilo-1">
              <button type="button" className="botao-rede-social botao-linkedin" onClick={() => janelaPopUp('https://www.linkedin.com/shareArticle?mini=true&url=https://resumobook.com.br/recomendacoes')}><img src="/images/publicacoes/linkedin icone.png" alt="icone Linkedin" width="20" height="20" className="img-rede-social" />
                <span className="rede-social-text">Compartilhe no Linkedin</span></button>
            </div>
          </section>
        </aside>

        </article>
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

  return {
    props: {
      post,
    },
  };
};