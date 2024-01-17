import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorPalette from "./components/ColorPalette/ColorPalette.jsx";

function Demo() {
  return (
    <div className="demo">
      <ColorPalette />
    </div>
  );
}



export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
