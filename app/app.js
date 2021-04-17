import "./styles/main.scss"
import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import ProgressBar from "./components/ProgressBar"

function App() {

  return (
    <>
      <div className="React">
        <ProgressBar />
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

if (module.hot) {
  module.hot.accept()
}
