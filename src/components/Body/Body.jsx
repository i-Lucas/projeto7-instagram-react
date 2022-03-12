import Story from "./Story"

const contents = {
    
    img: [
        "assets/img/9gag.svg",
        "assets/img/meowed.svg",
        "assets/img/barked.svg",
        "assets/img/nathanwpylestrangeplanet.svg",
        "assets/img/wawawicomics.svg",
        "assets/img/respondeai.svg",
        "assets/img/filomoderna.svg",
        "assets/img/memeriagourmet.svg",
    ],
    user: [
        "9gag",
        "meowed",
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ]
}

export default function Body(props) {
    return (
        <div className="corpo">
            <div className="esquerda">

                <div className="stories">

                    <Story
                        img={contents.img[0]}
                        user={contents.user[0]}
                    />

                    <Story
                        img={contents.img[1]}
                        user={contents.user[1]}
                    />


                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div className="posts">
                    <div className="post">
                        <div className="topo">
                            <div className="usuario">
                                <img src="assets/img/meowed.svg" alt="x" />
                                meowed
                            </div>
                            <div className="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div className="conteudo">
                            <img src="assets/img/gato-telefone.svg" alt="x" />
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div className="curtidas">
                                <img src="assets/img/respondeai.svg" alt="x" />
                                <div className="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="topo">
                            <div className="usuario">
                                <img src="assets/img/barked.svg" alt="x" />
                                barked
                            </div>
                            <div className="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div className="conteudo">
                            <img src="assets/img/dog.svg" alt="x" />
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div className="curtidas">
                                <img src="assets/img/adorable_animals.svg" alt="x" />
                                <div className="texto">
                                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

                    <div className="sugestao">
                        <div className="usuario">
                            <img src="assets/img/bad.vibes.memes.svg" alt="x" />
                            <div className="texto">
                                <div className="nome">bad.vibes.memes</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img src="assets/img/chibirdart.svg" alt="x" />
                            <div className="texto">
                                <div className="nome">chibirdart</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img src="assets/img/razoesparaacreditar.svg" alt="x" />
                            <div className="texto">
                                <div className="nome">razoesparaacreditar</div>
                                <div className="razao">Novo no Instagram</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img src="assets/img/adorable_animals.svg" alt="x" />
                            <div className="texto">
                                <div className="nome">adorable_animals</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>

                    <div className="sugestao">
                        <div className="usuario">
                            <img src="assets/img/smallcutecats.svg" alt="x" />
                            <div className="texto">
                                <div className="nome">smallcutecats</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>
                </div>

                <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}