import content_suggestions from "../Sidebar/Data"

export default function RenderSugestoes () {
    return content_suggestions.map(({ nome, razao, src }) => <Sugestao nome={nome} razao={razao} img={src} />)
} 

function Sugestao({ nome, razao, img }) {

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={img} alt="x" />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">{razao}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}
