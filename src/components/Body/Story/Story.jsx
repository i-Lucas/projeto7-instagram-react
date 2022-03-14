const storys_contents = [

    { img: "assets/img/9gag.svg", user: "9gag" },
    { img: "assets/img/meowed.svg", user: "meowed", },
    { img: "assets/img/barked.svg", user: "barked", },
    { img: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet", },
    { img: "assets/img/wawawicomics.svg", user: "wawawicomics", },
    { img: "assets/img/respondeai.svg", user: "respondeai", },
    { img: "assets/img/filomoderna.svg", user: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", user: "memeriagourmet" },
]

export default function RenderStories() {
    return (
        storys_contents.map(object => <Story img={object.img} user={object.user} />)
    )
}

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