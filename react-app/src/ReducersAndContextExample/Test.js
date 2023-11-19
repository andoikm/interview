import {useContext} from "react";
import {ThemContext} from "./ThemContext";

const Test = () => {
  const {data} = useContext(ThemContext);

  return (
    <div className={data.them}>
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <h5>Hello</h5>
      <h6>Hello</h6>
    </div>
  );
};

export default Test;
