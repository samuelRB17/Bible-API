import { useEffect, useState } from "react"
import { Link } from "react-router"
import "./styles.css"

interface Verse {
  book_name: string
  chapter: number
  verse: number
  text: string
}

function Favoritos() {
  const [favorites, setFavorites] = useState<Verse[]>([])

 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(stored)
  }, [])

  // eliminar  esefavorito
  const eliminarFavorito = (verseNumber: number) => {
    const actualizados = favorites.filter(v => v.verse !== verseNumber)

    setFavorites(actualizados)
    localStorage.setItem("favorites", JSON.stringify(actualizados))
  }

  return (
  <div className="favorites-page">
    <h1 className="favorites-title">Favoritos</h1>

    {favorites.length === 0 ? (
      <p className="empty-text">No tienes versículos favoritos</p>
    ) : (
      <ul className="favorites-list">
        {favorites.map((v) => (
          <li
            className="favorite-card"
            key={`${v.book_name}-${v.chapter}-${v.verse}`}
          >
            <Link
              className="favorite-link"
              to={`/verso/${v.book_name.toLowerCase()}/${v.verse}`}
            >
              {v.book_name} {v.chapter}:{v.verse}
            </Link>

            <button
              className="delete-btn"
              onClick={() => eliminarFavorito(v.verse)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
)
}

export default Favoritos