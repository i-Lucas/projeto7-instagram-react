import reactDom from "react-dom"

import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Body/Body"
import Mobile from "./components/Mobile/Mobile"

function H1(props) {
    return (
        <>
            <Navbar />
            <Body />
            <Mobile />
        </>
    )
}

const h1 = H1()
reactDom.render(h1, document.querySelector(".root"))