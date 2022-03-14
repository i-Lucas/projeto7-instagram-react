import Icones from "../../Icones/Icones"

const posts_contents = [
    {
        userImg: "assets/img/meowed.svg",
        userName: "meowed",
        postImg: "assets/img/gato-telefone.svg",
        likeImg: "assets/img/respondeai.svg",
        likeName: "respondeai",
        likesData: "outras 101.523 pessoas"
    },
    {
        userImg: "assets/img/barked.svg",
        userName: "barked",
        postImg: "assets/img/dog.svg",
        likeImg: "assets/img/adorable_animals.svg",
        likeName: "adorable_animals",
        likesData: "outras 99.159 pessoas"
    }
]

export default function RenderPosts() {

    return (posts_contents.map(({ userImg, userName, postImg, likeImg, likeName, likesData }) =>

        <Post
            userImg={userImg} userName={userName}
            postImg={postImg} likeImg={likeImg}
            likeName={likeName} likesData={likesData}
        />
    ))
}

function Post({ userImg, userName, postImg, likeImg, userlike, likesData }) {
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

