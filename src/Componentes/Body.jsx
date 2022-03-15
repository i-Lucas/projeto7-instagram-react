import Sidebar from './Sidebar/Sidebar'
import Stories from './Stories/Stories'
import Posts from './Posts/Posts'

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}