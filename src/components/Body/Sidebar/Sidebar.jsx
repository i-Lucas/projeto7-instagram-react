import RenderSugestoes from "./Render"

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="assets/img/catanacomics.svg" alt="x" />
                <div className="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <RenderSugestoes />
            </div>
            <RenderInfo />
        </div>
    )
}

function RenderInfo() {
    
    return (
        <div>
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}