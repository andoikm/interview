import React, {useState} from "react";
export const Context = React.createContext();

const MyContext = ({children}) => {
  const [values, setValues] = useState([1,2,3,4]);

  return (
    <Context.Provider value={{values, setValues}}>
      {children}
    </Context.Provider>
  );
};

export default MyContext
