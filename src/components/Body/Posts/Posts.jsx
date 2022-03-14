import Icones from "../../Icones/Icones"

export default function Post({ userImg, userName, postImg, likeImg, userlike, likesData }) {
    return (
        <div className="posts">

            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={userImg} alt="x" />
                        {userName}
                    </div>
                    <div className="acoes">
                        <Icones name="ellipsis-horizontal" />
                    </div>
                </div>

                <div className="conteudo">
                    <img src={postImg} alt="x" />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <Icones name="heart-outline" />
                            <Icones name="chatbubble-outline" />
                            <Icones name="paper-plane-outline" />
                        </div>
                        <div>
                            <Icones name="bookmark-outline" />
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={likeImg} alt="x" />
                        <div className="texto">
                            Curtido por <strong>{userlike}</strong> e <strong>{likesData}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

