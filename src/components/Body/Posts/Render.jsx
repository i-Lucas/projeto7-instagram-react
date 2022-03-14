import posts_contents from "./Data"
import Post from "./Posts"

export default function RenderPosts() {

    return (posts_contents.map(({ userImg, userName, postImg, likeImg, likeName, likesData }) =>

        <Post
            userImg={userImg} userName={userName}
            postImg={postImg} likeImg={likeImg}
            likeName={likeName} likesData={likesData}
        />
    ))
}