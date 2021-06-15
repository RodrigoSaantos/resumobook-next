export function Footer() {
  return (
    <footer>
    {/* <!-- Contact Section --> */}
    <section className="contato">
        <h2 className="fale-com">FALE COM</h2>
        <a href="/fale-com">
            <button type="button" className="botao botao-contato-1">Para entrar em contato clique aqui</button>
        </a>
    </section>
    {/* <!-- Talk to section --> */}
    <section className="register" id="contact">
        <p className="hero_header">PARA RECEBER NOVOS RESUMOS &amp; ATUALIZAÇÕES</p>
        <a href="/cadastre-se">
            <div className="button">CADASTRE-SE</div>
        </a>
    </section>
    {/* <!-- Register section--> */}
    <section className="copyright">
        <div>©2019 -
            <strong>Resumo Book</strong>
        </div>
    </section>
    {/* <!-- Copyrights Section --> */}
</footer>
  )
}