import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import Favoritos from "./Favoritos"
import Home from "./Home"
import Informativa from "./Informativa"
import Original from "./Original"
import Verso from "./Versiculo"
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
          favoritos
          </Link>
            
            <Link to="/Informativa">
          informativa
          </Link>
           <Link to="/Original">
          Original
          </Link>
          


        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Informativa" element={<Informativa />} />
          <Route path="/Original" element={<Original />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/verso/:libro/:id" element={<Verso />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
