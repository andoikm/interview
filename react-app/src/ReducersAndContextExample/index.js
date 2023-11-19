import ChangeThem from "./ChangeThem";
import Test from "./Test";
import ThemProvider from "./ThemProvider";
import React from "react";

import "./index.css";

const ReducersAndContextExample = () => {
  return (
    <ThemProvider>
      <ChangeThem />
      <Test />
    </ThemProvider>
  );
};

export default ReducersAndContextExample;
