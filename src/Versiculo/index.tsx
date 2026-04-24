import { useParams } from "react-router"
import { useState, useEffect } from "react"
import "./styles.css"

interface Verse {
  book_name: string
  chapter: number
  verse: number
  text: string
}

function Verso() {
  const { libro, id } = useParams<{ libro: string; id: string }>()
  const [verse, setVerse] = useState<Verse | null>(null)

  useEffect(() => {
    if (!libro || !id) return

    const fetchData = async () => {
      const res = await fetch(
        `https://bible-api.com/${libro}%201?single_chapter_book_matching=indifferent`
      )
      const data = await res.json()

      const encontrado = data.verses.find(
        (v: Verse) => v.verse === Number(id)
      )

      setVerse(encontrado)
    }

    fetchData()
  }, [libro, id])

 
  const guardarFavorito = () => {
    if (!verse) return

    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")

    const existe = stored.some(
      (v: Verse) =>
        v.book_name === verse.book_name &&
        v.chapter === verse.chapter &&
        v.verse === verse.verse
    )

    if (!existe) {
      const nuevos = [...stored, verse]
      localStorage.setItem("favorites", JSON.stringify(nuevos))
    }
  }

  if (!verse) return <p>Cargando...</p>

  return (
  <div className="verse-page">

    <div className="verse-container">

      <h2 className="verse-title">
        {verse.book_name} {verse.chapter}:{verse.verse}
      </h2>

      <p className="verse-text">{verse.text}</p>

      <button onClick={guardarFavorito}>
        Guardar en favoritos
      </button>

    </div>

  </div>
)
}

export default Verso