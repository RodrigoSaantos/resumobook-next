
import Head from "next/head";
import React from "react";
import { ButtonsPage } from "../components/ButtonsPage";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";

export default function Falecom() {
  return (
    <>
    <Head>
      <title>ResumoBook | FALE COM</title>
      <meta name="description" content="O melhor dos resumos dos livros" />
      <meta property="og:url" content="https://resumobook.com.br" />
      <meta property="og:type" content="site" />
      <meta property="og:title" content="ResumoBook" />
      <meta property="og:description" content="O melhor dos resumos dos livros" />
    </Head>

    <PageHeader />

    <section id="about">
      <article className="about-myself">
      
        <h2 className="text-sobremim"> FALE COM</h2>
      
        <img src="images/pagina-inicial/iconedown.png" alt="icone down" height="15" width="22" className="icone" />
      </article>
    </section>

    <section>
      <article className="sobremim-corpo">
        <div className="caixa-falecom">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwL3TbuCBzI7JnBrGe1q1A5cVn6xrJ9TG-Vf1kh5QZpRxFlA/viewform?embedded=true" width="640" height="1001" frameBorder="0" marginHeight={0} marginWidth={0}>Carregando…</iframe>
        </div>
      </article>
    </section>

    <ButtonsPage />
    <Footer />
    </>
  )
}


