import {ThemContext} from "./ThemContext";
import {useReducer} from "react";

const reducers = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEM" :{
      return {
        ...state,
        them : action.payload
      }
    }
  }
};

const ThemProvider = ({children}) => {
  const [data, dispatch] = useReducer(reducers, {them: "light"});

  return (
    <ThemContext.Provider value={{data, dispatch}}>
      {children}
    </ThemContext.Provider>
  );
};

export default ThemProvider
