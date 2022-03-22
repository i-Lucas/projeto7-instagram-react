export default function Suggestion({imagem, usuario, info}) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={imagem} alt ={usuario}/>
                <div className="texto">
                    <div className="nome">{usuario}</div>
                    <div className="razao">{info}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}