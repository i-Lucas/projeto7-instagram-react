export default function Story({imagem, usuario}) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem} alt={usuario} />
            </div>
            <div className="usuario">
                {usuario}
            </div>
        </div>
    )
}