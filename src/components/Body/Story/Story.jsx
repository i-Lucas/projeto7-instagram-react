import storys_contents from "../Story/Data"

export default function RenderStories() { return (storys_contents.map(object => <Story img={object.img} user={object.user} />)) }

function Story({ img, user }) {

    return (
        <div className="story">
            <div className="imagem">
                <img src={img} alt="x" />
            </div>
            <div className="usuario">
                {user}
            </div>
        </div>
    )
}