import React from "react"
import logo from "./logo.svg"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="w-24 h-24" alt="logo" />
                <p className="font-extrabold underline text-red-500">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React, if you want I guess! It's fun!
                </a>
            </header>
        </div>
    )
}

export default App
