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

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

const contents = [
    { nome: "bad.vibes.memes", razao: "Segue você", src: "assets/img/bad.vibes.memes.svg" },
    { nome: "chibirdart", razao: "Segue você", src: "assets/img/chibirdart.svg" },
    { nome: "razoesparaacreditar", razao: "Novo no Instagram", src: "assets/img/razoesparaacreditar.svg" },
    { nome: "adorable_animals", razao: "Segue você", src: "assets/img/adorable_animals.svg" },
    { nome: "smallcutecats", razao: "Segue você", src: "assets/img/smallcutecats.svg" }
]

function RenderSugestoes() {

    return (
        <>
            {contents.map(content => {
                return (
                    <div className="sugestao">
                        <div className="usuario">
                            <img src={content.src} alt="x" />
                            <div className="texto">
                                <div className="nome">{content.nome}</div>
                                <div className="razao">{content.razao}</div>
                            </div>
                        </div>
                        <div className="seguir">Seguir</div>
                    </div>
                )
            })}
        </>
    )
}
