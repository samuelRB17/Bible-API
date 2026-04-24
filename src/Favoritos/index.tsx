import { useEffect, useState } from "react"
import { Link } from "react-router"

interface Verse {
  book_name: string
  chapter: number
  verse: number
  text: string
}

function Favoritos() {
  const [favorites, setFavorites] = useState<Verse[]>([])

  // 🔁 cargar favoritos desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(stored)
  }, [])

  // ❌ eliminar favorito
  const eliminarFavorito = (verseNumber: number) => {
    const actualizados = favorites.filter(v => v.verse !== verseNumber)

    setFavorites(actualizados)
    localStorage.setItem("favorites", JSON.stringify(actualizados))
  }

  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tienes versículos favoritos</p>
      ) : (
        <ul>
          {favorites.map((v) => (
            <li key={`${v.book_name}-${v.chapter}-${v.verse}`}>
              
              <Link to={`/verso/${v.book_name.toLowerCase()}/${v.verse}`}>
                {v.book_name} {v.chapter}:{v.verse}
              </Link>

              <button onClick={() => eliminarFavorito(v.verse)}>
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