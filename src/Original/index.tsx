import { useState } from "react"
import "./styles.css"

function Original() {
  const [verso, setVerso] = useState("")
  const [cargando, setCargando] = useState(false)

  const obtenerVersiculo = async () => {
    setCargando(true)

    const libros = ["john", "genesis", "psalms"]
    const libro = libros[Math.floor(Math.random() * libros.length)]
    const capitulo = Math.floor(Math.random() * 5) + 1

    try {
      const res = await fetch(`https://bible-api.com/${libro}%20${capitulo}`)
      const data = await res.json()

      const randomVerse =
        data.verses[Math.floor(Math.random() * data.verses.length)]

      setVerso(randomVerse.text)
    } catch (error) {
      setVerso("Error al cargar versículo")
    }

    setCargando(false)
  }

  return (
    <div className="original-container">
      <div className="poster">

        <h1 className="titulo">Bible API</h1>

       
        <button className="btn-verso" onClick={obtenerVersiculo}>
          Obtener versículo del día
        </button>

        
        {cargando && <p>Cargando...</p>}

        {verso && (
          <p className="verso">
            "{verso}"
          </p>
        )}

      </div>
    </div>
  )
}

export default Original