import {useContext} from "react";
import {ThemContext} from "./ThemContext";

const ChangeThem = () => {
  const {data, dispatch} = useContext(ThemContext);

  return (
    <div>
      <button onClick={() => dispatch({
        type: "CHANGE_THEM",
        payload: data.them === "light" ? "dark" : "light"
      })}>
        Change Them to {data.them === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default ChangeThem;
