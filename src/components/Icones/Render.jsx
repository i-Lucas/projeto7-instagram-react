import Icones from "../Icones/Icones"
import icon_names from "./Data"

export default function RenderIcones() {
    return (
        icon_names.map(iconName => <Icones name ={iconName} />)
    )
}