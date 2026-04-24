import { useState, useEffect } from "react"
import { Link } from "react-router"
import "./styles.css"

interface Verse {
  book_id: string
  book_name: string
  chapter: number
  verse: number
  text: string
}

type FiltroTipo = 'daniel' | 'genesis' | 'john'
const filtros: FiltroTipo[] = ['daniel', 'genesis', 'john']

function Home() {
  const [verses, setVerses] = useState<Verse[]>([])
  const [title, setTitle] = useState('')
  const [filtro, setFiltro] = useState<FiltroTipo>('daniel')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://bible-api.com/${filtro}%201?single_chapter_book_matching=indifferent`
        )

        const data = await res.json()

        setVerses(data.verses)
        setTitle(data.reference)

      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }

    fetchData()
  }, [filtro])

  const versosFiltrados = verses.filter((v) =>
    v.text.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <div className="filtros">
        {filtros.map((libro) => (
          <button
            key={libro}
            onClick={() => setFiltro(libro)}
            className={filtro === libro ? 'filter-btn active' : 'filter-btn'}
          >
            {libro}
          </button>
        ))}
      </div>

     <input
  type="text"
  placeholder="Buscar palabra..."
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  className="search-bar"
/>

      <h2>{title}</h2>

      <div className="cards-container">
  {versosFiltrados.map((v) => (
    <Link
      key={v.verse}
      to={`/verso/${filtro}/${v.verse}`}
      className={
  busqueda.length > 0
    ? "card resaltado"
    : "card"
}
    >
      <h3>Versículo {v.verse}</h3>
    </Link>
  ))}
</div>
    </>
  )
}

export default Home