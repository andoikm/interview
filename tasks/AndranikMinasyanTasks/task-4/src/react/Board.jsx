import React from 'react'
import { createRoot } from 'react-dom/client'
import Kanban from "./Kanban/index.jsx";


function Board() {
  return (
    <div className={"board"}>
      <h1>TODO: Render board here</h1>
      <Kanban />
    </div>
  )
}



export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Board/>)
}