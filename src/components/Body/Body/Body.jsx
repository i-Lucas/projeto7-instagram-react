import RenderStories from "../Story/Story"
import Sidebar from "../Sidebar/Sidebar"
import Icones from "../../Icones/Icones"
import RenderPosts from "../Posts/Render"

export default function Body() {

    return (

        <div className="corpo">
            <div className="esquerda">
                <div className="stories">
                    <RenderStories />
                    <div className="setinha">
                        <Icones name="chevron-forward-circle" />
                    </div>
                </div>
                <RenderPosts />
            </div>
            <Sidebar />
        </div>
    )
}