import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import React from "react";
import { PageHeader } from "../../components/PageHeader";
import { getPrismicClient } from "../../services/prismic";

// type Content = {
//   body: string;
//   heading: string;
//   image: {
//     url: string;
//   };
//   imageaside: {
//     url: string;
//   };
//   reference: string
// }

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

            <div dangerouslySetInnerHTML={{__html: post.content}} />


            <button type="button" className="botao-voltar">Voltar</button>

            <div className="regua-horizonatal-position-1">
              <a href="{{places[numberPage].customLinkAffiliate}}" target="_blank">
                <button type="button" className="botao botao-centralizado">Caso queira adquirir o livro clique aqui</button>
              </a>
              <div className="regua-horizontal-corpo-1"></div>
              <img src="/images/publicacoes/compartilhe-amor-nos-diga-o-que-voce-acha.png" alt="Deixe seu comentário" width="597" height="63" className="image-compartilhe" />
            </div>
          </div>

        </article>
      </section>

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