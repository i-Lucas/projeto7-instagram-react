import Story from "./Story"
import Sidebar from "./Sidebar"
import Icones from "../Icones/Icones"

const contents = [

    { img: "assets/img/9gag.svg", user: "9gag" },
    { img: "assets/img/meowed.svg", user: "meowed", },
    { img: "assets/img/barked.svg", user: "barked", },
    { img: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet", },
    { img: "assets/img/wawawicomics.svg", user: "wawawicomics", },
    { img: "assets/img/respondeai.svg", user: "respondeai", },
    { img: "assets/img/filomoderna.svg", user: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", user: "memeriagourmet" },
]

function RenderStories() {
    return (<>{contents.map(({ img, user }) => <Story img={img} user={user} />)}</>)
}

export default function Body() {

    return (
        <div className="corpo">
            <div className="esquerda">

                <div className="stories">

                    <RenderStories />

                    <div className="setinha">
                        <Icones name="chevron-forward-circle" />
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
                                <Icones name="ellipsis-horizontal" />
                            </div>
                        </div>

                        <div className="conteudo">
                            <img src="assets/img/gato-telefone.svg" alt="x" />
                        </div>

                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <RenderIcones />
                                </div>
                                <div>
                                    <Icones name="bookmark-outline" />
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
                                    <RenderIcones />
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

            <Sidebar />
        </div>
    )
}

function RenderIcones() {
    return (
        <>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </>
    )
}