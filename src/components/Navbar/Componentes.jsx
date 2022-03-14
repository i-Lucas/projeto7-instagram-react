import Icones from "../Icones/Icones"

export default function Componentes() {
    return (
      <div>
        <div className="logo-mobile">
          <Icones name="logo-instagram" />
        </div>
  
        <div className="instagram-mobile">
          <img src="assets/img/logo.png" alt="logo" />
        </div>
  
        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
    )
  }