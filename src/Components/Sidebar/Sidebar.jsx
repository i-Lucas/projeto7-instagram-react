import Suggestion from './Suggestion'

const sugestoes = [
    { imagem: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", info: "Segue você" },
    { imagem: "assets/img/chibirdart.svg", usuario: "chibirdart", info: "Segue você" },
    { imagem: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", info: "Novo no Instagram" },
    { imagem: "assets/img/adorable_animals.svg", usuario: "adorable_animals", info: "Segue você" },
    { imagem: "assets/img/smallcutecats.svg", usuario: "smallcutecats", info: "Segue você" }
]

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="usuario">
                <img src="assets/img/catanacomics.svg" />
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

                <RenderSuggestions />
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

const RenderSuggestions = () => sugestoes.map(({ imagem, usuario, info }, index) => <Suggestion key={index} imagem={imagem} usuario={usuario} info={info} />)