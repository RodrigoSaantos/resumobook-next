export function Search() {
  return (
    <div className="box-search">
      <form action="/results">
        <label htmlFor="search"></label>
        <div className="search field">
          <input type="text" name="search" placeholder="Pesquise os post aqui" />
          <button type="submit">
              <img src="/images/pagina-inicial/search.svg" alt="Buscar" />
          </button>
        </div>
      </form>
    </div>
  )
}
