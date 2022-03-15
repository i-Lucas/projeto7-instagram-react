import Post from './Post'

const posts = [
    {
        userImg: "assets/img/meowed.svg",
        userName: "meowed",
        postImg: "assets/img/gato-telefone.svg",
        likeImg: "assets/img/respondeai.svg",
        userLike: "respondeai",
        postInfo: "outras 101.523 pessoas"
    },
    {
        userImg: "assets/img/barked.svg",
        userName: "barked",
        postImg: "assets/img/dog.svg",
        likeImg: "assets/img/adorable_animals.svg",
        userLike: "adorable_animals",
        postInfo: "outras 99.159 pessoas"
    }
]

export default function Posts() {
    return (
        <div className="posts">
            <RenderPosts />
        </div>
    )
}

function RenderPosts() {
    return posts.map(({ userImg, userName, postImg, likeImg, userLike, postInfo }, index) =>
        <Post key={index} userImg={userImg} userName={userName} postImg={postImg} likeImg={likeImg} userLike={userLike} postInfo={postInfo} />)
}