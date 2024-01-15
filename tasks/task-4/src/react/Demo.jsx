import React from 'react'
import { createRoot } from 'react-dom/client';

import SpriteContainer from "./SpriteContainer.jsx";

function Demo() {
  return (
    <div className="demo">
      <h1>TODO: Render player here</h1>Using browser APIs and CSS create a player for playing a 24 fps animation sprite.
      <SpriteContainer />
    </div>
  );
}

export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
