import Story from './Story'

const stories = [
    { imagem: 'assets/img/9gag.svg', usuario: '9gag' },
    { imagem: 'assets/img/meowed.svg', usuario: 'meowed' },
    { imagem: 'assets/img/barked.svg', usuario: 'barked' },
    { imagem: 'assets/img/nathanwpylestrangeplanet.svg', usuario: 'nathanwpylestrangeplanet' },
    { imagem: 'assets/img/wawawicomics.svg', usuario: 'wawawicomics' },
    { imagem: 'assets/img/respondeai.svg', usuario: 'respondeai' },
    { imagem: 'assets/img/filomoderna.svg', usuario: 'filomoderna' },
    { imagem: 'assets/img/memeriagourmet.svg', usuario: 'memeriagourmet' }
]

export default function Stories() {
    return (
        <div className="stories">

            <RenderStories />

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}


const RenderStories = () => stories.map(({ imagem, usuario }, index) => <Story key={index} imagem={imagem} usuario={usuario} />)