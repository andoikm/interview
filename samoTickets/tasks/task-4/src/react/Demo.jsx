import React from 'react'
import { createRoot } from 'react-dom/client'


function Demo() {
  return (
    <div className="demo">
      <h1>TODO: Render slider here</h1>
    </div>
  )
}



export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
