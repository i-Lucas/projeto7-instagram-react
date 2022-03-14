import Icones from "../Icones/Icones"

const names = [

    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline"
]

export default function Mobile() {

    return (
        <div className="fundo-mobile">
            <RenderIcones />
        </div>
    )
}

function RenderIcones() {
    return (
        names.map(iconName => <Icones name ={iconName} />)
    )
}