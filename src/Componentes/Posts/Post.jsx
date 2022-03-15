export default function Post({userImg, userName, postImg, likeImg, userLike, postInfo}) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={userImg} />
                    {userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={postImg} />
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
                    <img src={likeImg} />
                    <div className="texto">
                        Curtido por <strong>{userLike}</strong> e <strong>{postInfo}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}