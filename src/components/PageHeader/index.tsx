export function PageHeader() {
  return (
    <header>
        <div className="container">
            <a href="/">
                <h4 className="logo">ResumoBook</h4>
            </a>
            <div className="menu-section">
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Inicial</a>
                        </li>
                        <li>
                            <a href="/#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                        <li>
                            <a href="/page/1">Post</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}