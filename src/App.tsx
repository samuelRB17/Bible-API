import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import Favoritos from "./Favoritos"
import Home from "./Home"
import Informativa from "./Informativa"
import Original from "./Original"
import Usuario from "./Usuario"
import "./App.css"

function App() {
 

  return (
    <>
      <Router>
        <nav className="c-menu">
          
          <Link to="/Home">
          Home
          </Link>

          <Link to="/Favoritos">
          fav
          </Link>
            
            <Link to="/Informativa">
          info
          </Link>
            <Link to="/Usuario">
          Usu
          </Link>
           <Link to="/Original">
          Ori
          </Link>
          


        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/equipo/:equipo" element={<Equipo />} />
          <Route path="/Informativa" element={<Informativa />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/Original" element={<Original />} />
          <Route path="/Home" element={<Home />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
