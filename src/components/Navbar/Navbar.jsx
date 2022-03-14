import Icones from "../Icones/Icones"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Icones name="logo-instagram" />
          <div className="separador"></div>
          <img src="assets/img/logo.png" alt="logo" />
        </div>

        <div className="logo-mobile">
          <Icones name="logo-instagram" />
        </div>

        <div className="instagram-mobile">
          <img src="assets/img/logo.png" alt="logo" />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <RenderIcones />

        <div className="icones-mobile">
          <Icones name="paper-plane-outline" />
        </div>
      </div>
    </div>
  )
}

function RenderIcones() {
  return (
    <div className="icones">
      <Icones name="paper-plane-outline" />
      <Icones name="compass-outline" />
      <Icones name="heart-outline" />
      <Icones name="person-outline" />
    </div>
  )
}