import React from 'react';
import { createRoot } from 'react-dom/client';
import Slider from "./components/ColorPalette/Slider.jsx";

function Demo() {
  return (
    <div className="demo">
      <Slider />
    </div>
  )
}



export default function bootstrap(domElement) {
  const root = createRoot(domElement)
  root.render(<Demo/>)
}
