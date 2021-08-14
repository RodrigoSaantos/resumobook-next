import { useState } from "react"

export function PageHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }
  return (
    <header>
      <div className="container">
        <a href="/">
          <h4 className="logo">ResumoBook</h4>
        </a>
        <div className={`menu-section ${isOpen ? 'on' : ''}`}>
          <div className="menu-toggle" onClick={handleMenuToggle}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/" onClick={() => setIsOpen(false)}>Inicial</a>
              </li>
              <li>
                <a href="/#about" onClick={() => setIsOpen(false)}>Sobre</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contato</a>
              </li>
              <li>
                <a href="/page/1" onClick={() => setIsOpen(false)}>Post</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}