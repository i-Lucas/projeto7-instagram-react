import Icones from "../Icones/Icones"
import Componentes from "./Componentes"
import RenderIcones from "./Render"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Icones name="logo-instagram" />
          <div className="separador"></div>
          <img src="assets/img/logo.png" alt="logo" />
        </div>

        <Componentes />
        <RenderIcones />

        <div className="icones-mobile">
          <Icones name="paper-plane-outline" />
        </div>
      </div>
    </div>
  )
}