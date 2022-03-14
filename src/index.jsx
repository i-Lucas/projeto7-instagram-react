import reactDom from "react-dom"

import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Body/Body"
import Mobile from "./components/Mobile/Mobile"

function App() {
    return (
        <>
            <Navbar />
            <Body />
            <Mobile />
        </>
    )
}

reactDom.render(<App />, document.querySelector(".root"))