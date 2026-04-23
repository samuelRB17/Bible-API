import { useState, useEffect } from 'react'
import { Link } from "react-router"



interface Verses {
  book_id: number
  book_name: string
  chapter: number
  verse: number
  text : string
}


type FiltroTipo = 'posiciones' | 'goleador' | 'asistencias' | 'amarillas' | 'atajadas'
 const filtros: FiltroTipo[] = ['posiciones', 'goleador', 'asistencias', 'amarillas', 'atajadas']

function Home() {
  const [verses, setVerses] = useState<Verses[]>([]) // es
  const [title, setTitle] = useState('') // estado de titulo 
  const [estaditicas, setEstadisticas] = useState('')
  const [filtro, setFiltro] = useState<FiltroTipo>('posiciones')
   const [busqueda, setBusqueda] = useState('')

  // useeefct espera cambios para , peticion para hacer cambios

  useEffect(() => {
    const fetchData = async () => {
      try {
         const res = await fetch(`https://bible-api.com/daniel%201?single_chapter_book_matching=indifferent`)
        const data = await res.json()

        setRanking(data.standings[0].ranking)
        setTitle(data.standings[0].competitionName)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }

    fetchData()
  }, )
  const equiposMap: Record<string, string> = {
  "América de Cali SA": "america-de-cali",
  "CA Bucaramanga": "atletico-bucaramanga",
  "Club Atlético Nacional SA": "atletico-nacional",
  "Club Deportes Tolima SA": "deportes-tolima",
  "Asociación Deportivo Cali": "deportivo-cali",
  "Deportivo Independiente Medellín": "independiente-medellin",
  "Club Independiente Santa Fe": "independiente-santa-fe",
  "CD Popular Junior FC SA": "junior",
  "Millonarios FC": "millonarios",
  "Once Caldas SA": "once-caldas",

  "Internacional de Bogotá": "internacional-bogota",
  "Club Llaneros SA": "llaneros",
  "Águilas Doradas": "aguilas-doradas",
  "Fortaleza FC": "fortaleza",
  "Alianza FC": "alianza",
  "Jaguares de Córdoba FC": "jaguares",
  "Cúcuta Deportivo FC": "cucuta",
  "Boyacá Chicó FC": "boyaca-chico",
  "Deportivo Pereira FC": "pereira",
  "AD Pasto": "pasto"
  
};
return (
  <>
    <div className="filtros">
        {filtros.map((onestat) => (
          <button
            key={onestat}
            onClick={() => setFiltro(onestat)}
            className={filtro === onestat ? 'activo' : ''}
          >
            {onestat}
          </button>
        ))}

      </div>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

    <div className="tabla-container">
      <h2>{title}</h2>
      <table className="tabla-posiciones">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((equipo) => (
            <tr key={equipo.rank}>
              <td>{equipo.rank}</td>
              <Link to = {`/equipo/${equiposMap[equipo.contestantName]}`}>
                    <td>{equipo.contestantName}</td>
              </Link>
              <td>{equipo.matchesPlayed}</td>
              <td>{equipo.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home