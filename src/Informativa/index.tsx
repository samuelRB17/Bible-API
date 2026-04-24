import "./styles.css"

function Original() {
  return (
    <div className="original-container">

      <div className="poster">

        <h1 className="titulo">
          Bible API
        </h1>

        <p className="descripcion">
          La Bible API es una interfaz de programación que permite acceder de manera
          estructurada y dinámica a textos bíblicos. Su propósito es facilitar la
          consulta, integración y manipulación de versículos, capítulos y libros
          completos dentro de aplicaciones web o móviles.

          Esta API proporciona datos en formato JSON, lo que permite a los
          desarrolladores implementar funcionalidades como búsqueda de versículos,
          visualización de textos religiosos, y creación de herramientas educativas
          o espirituales.

          Su uso es especialmente relevante en contextos académicos, aplicaciones
          religiosas, plataformas de estudio bíblico y sistemas interactivos que
          requieran acceso rápido y organizado a contenido textual.
        </p>

        <div className="imagenes">

        
          <img src="/img/humanidad.jpg" alt="Biblia abierta" />
          <img src="/img/images.jpg" alt="Lectura bíblica" />
          <img src="/img/Dan.jpg" alt="Contexto espiritual" />

        </div>

      </div>

    </div>
  )
}

export default Original