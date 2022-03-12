import reactDom from "react-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Mobile from "./components/Mobile"

function H1() {
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