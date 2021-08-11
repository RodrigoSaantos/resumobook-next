import Head from "next/head";
import React from "react";
import { ButtonsPage } from "../components/ButtonsPage";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";

export default function Cadastrese() {
  return (
    <>
    <Head>
      <title>ResumoBook | Cadrastre-se - Para receber os resumos diretamente no seu E-mail</title>
      <meta name="description" content="O melhor dos resumos dos livros" />
      <meta property="og:url" content="https://resumobook.com.br" />
      <meta property="og:type" content="site" />
      <meta property="og:title" content="ResumoBook" />
      <meta property="og:description" content="O melhor dos resumos dos livros" />
    </Head>

    <PageHeader />

    <section id="about">
      <article className="about-myself">
      
        <h2 className="text-sobremim"> CADASTRE-SE</h2>
      
        <img src="images/pagina-inicial/iconedown.png" alt="icone down" height="15" width="22" className="icone" />
      </article>
    </section>

    <section>
      <article className="sobremim-corpo">
        <div className="caixa-cadastrese">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc3QVEvBz6iPmvBERzVFnH9DQKnX_0G2u8q1yMMugfm6LRbtA/viewform?embedded=true" width="840" height="465" frameBorder="0" marginHeight={0} marginWidth={0}>Carregando…</iframe>	
        </div>
      </article>
    </section>

    <ButtonsPage />
    <Footer />
    </>
  )
}

