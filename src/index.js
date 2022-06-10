import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Profile from "./components/Profile"
import Projects from "./components/Projects"

function Page() {
    return (
        <div>
            <Profile />
            <Projects />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
